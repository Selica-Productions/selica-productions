import { useEffect, useState } from "react";
import { Navbar, Footer } from "./components/ui/index";
import { FilmItem } from "./components/films/index";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import {
  HomePage,
  MapPage,
  MoodPage,
  MoviesPage,
  WatchListPage,
} from "./pages";
import AboutUs from "./pages/about-us";

function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");
  const location = useLocation();

  const onSearch = (event) => {
    setSearch(event.target.value);
  };

  const addToWatchlist = (film) => {
    setWatchlist((prevList) => {
      if (prevList.some((item) => item.id === film.id)) {
        return prevList;
      }
      return [...prevList, film];
    });
  };

  const removeFromWatchlist = (id) => {
    setWatchlist((prevList) => prevList.filter((film) => film.id !== id));
  };

  // When change the page, reset the search
  useEffect(() => {
    setSearch("");
  }, [ location ]);


  return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar location={location.pathname} search={search} onSearch={onSearch} />
        <main className="flex-grow-1 py-3">
          <Routes>
            <Route path="/" element={<HomePage search={search} setSearch={onSearch} />} />
            <Route path="/movies" element={<MoviesPage search={search} setSearch={onSearch} />} />
            <Route path="/mood" element={<MoodPage search={search} setSearch={onSearch} />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route
              path="/watchlist"
              element={
                <WatchListPage
                  watchlist={watchlist}
                  removeFromWatchlist={removeFromWatchlist}
                />
              }
            />
            <Route
              path="/film/:id"
              element={
                <FilmItem
                  addToWatchlist={addToWatchlist}
                  removeFromWatchlist={removeFromWatchlist}
                  watchlist={watchlist}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
