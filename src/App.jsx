import { Navbar, Footer } from "./components/ui/index"
import {FilmItem }from "./components/films/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, MapPage, MoodPage, MoviesPage, WatchListPage } from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage/>}/>
        <Route path="/mood" element={<MoodPage />}/>
        <Route path="/map" element={<MapPage />}/>
        <Route path="/watchlist" element={<WatchListPage/>}/>
        <Route path="/film/:id" element={<FilmItem />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
