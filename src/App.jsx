import Navbar from "./components/ui/navbar/Navbar";
import FilmList from "./components/films/films-list/films-list";
import FilmItem from "./components/films/film-item/film-item";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FilmList />} />
        <Route path="/film/:id" element={<FilmItem />} />
      </Routes>
    </Router>
  );
}

export default App;
