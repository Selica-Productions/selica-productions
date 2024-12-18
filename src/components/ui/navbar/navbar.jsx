import Searchbar from "../../searchbar/searchbar";
import logo from "../../../../src/assets/images/logo.png";
import "./navbar.css"
import { Link } from "react-router-dom";

function Navbar({search, onSearch}) {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid">
        <img src={logo} alt="Logo aplicación" className="logo" />
          <Link className="navbar-brand" to="/"> Selica Productions </Link>
        <div className="d-flex justify-content-center align-items-center w-100">
          <Searchbar onChange={onSearch} search={search}/>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/movies"> Movies </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mood"> Mood </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/map"> Map </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watchlist"> WatchList </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
