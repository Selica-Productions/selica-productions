import { Navbar, Footer } from "./components/ui/index"
import {FilmItem, YearFilter }from "./components/films/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          // <FilmList />
           <YearFilter />
            
          } />
        <Route path="/film/:id" element={<FilmItem />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
