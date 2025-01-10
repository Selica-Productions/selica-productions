import Searchbar from "../../searchbar/searchbar";
import logo from "../../../../src/assets/images/logo.webp";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar({ search, onSearch, location }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info-subtle fixed-top">
        <div className="container-fluid">
          <img src={logo} alt="Logo aplicación" className="logo" />
          <Link className="navbar-brand" to="/">
            {" "}
            Selica Productions{" "}
          </Link>
          <div className="d-flex justify-content-center align-items-center w-100">
            {(location === "/" ||
              location === "/movies" ||
              location === "/mood") && (
              <Searchbar onChange={onSearch} search={search} />
            )}
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-4">
              <li className="nav-item">
                <Link className="nav-link" to="/movies">
                  {" "}
                  Movies{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mood">
                  {" "}
                  Mood{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/map">
                  {" "}
                  Map{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/watchlist">
                  {" "}
                  WatchList{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-nowrap" to="/aboutus">
                  {" "}
                  About us{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="bg-secondary text-white py-2">
        <div className="container d-flex justify-content-start align-items-center mt-4 mb-1 gap-5">
          <span className="fw-bold me-3">TRENDING ON SELICA:</span>
          <a
            href="https://goldenglobes.com/live-coverage/"
            className="text-white me-3 text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Golden Globes Winners
          </a>
          <a
            href="https://example.com/renewed-cancelled"
            className="text-white me-3 text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            All About the 2025 Oscars
          </a>
          <a
            href="https://www.imdb.com/imdbpicks/staff-picks/?ref_=hm_edcep_pks_staffvlp24_em00081_1_t"
            className="text-white me-3 text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            What To Watch in Theaters
          </a>
          <a
            href="https://www.imdb.com/imdbpicks/staff-picks/?ref_=hm_edcep_pks_staffvlp24_em00081_1_t"
            className="text-white me-3 text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            What To Watch on Streaming
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
