import { useState } from "react";
import { Navbar, Footer } from "./components/ui/index";
import { FilmItem } from "./components/films/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  MapPage,
  MoodPage,
  MoviesPage,
  WatchListPage,
} from "./pages";
import AboutUs from "./components/about-us/about-us";

function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");

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

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar search={search} onSearch={onSearch} />
        <main className="flex-grow-1 py-3">
          <Routes>
            <Route path="/" element={<HomePage search={search} />} />
            <Route path="/movies" element={<MoviesPage search={search} />} />
            <Route path="/mood" element={<MoodPage />} />
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
    </Router>
  );
}

export default App;
