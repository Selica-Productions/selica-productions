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

function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");

  const onSearch = (event) => {
    setSearch(event.target.value);
  }

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
      <div>
        <Navbar search={search} onSearch={onSearch} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage search={search} />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/mood" element={<MoodPage />} />
            <Route path="/map" element={<MapPage />} />
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
              element={<FilmItem addToWatchlist={addToWatchlist} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
