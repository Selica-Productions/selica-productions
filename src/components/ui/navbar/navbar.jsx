import Searchbar from "../../searchbar/searchbar";
import logo from "../../../../src/assets/images/rt-logo.png";

function Navbar() {
  const style = {
    width: "75px",
  };

  return (
    <div className="d-flex">
      <img src={logo} alt="Logo aplicación" style={style} />
      <Searchbar />
    </div>
  );
}

export default Navbar;
