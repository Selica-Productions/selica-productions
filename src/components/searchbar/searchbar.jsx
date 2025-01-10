import "./searchbar.css"

function SearchBar({ search, onChange }) {
  return (
    <form className="d-flex gap-1 w-100 justify-content-center" role="search">
      <div className="d-flex align-items-center w-75 position-relative">
        <i className="lens fa-solid fa-magnifying-glass position-absolute p-3"></i>
        <input
          id="search"
          type="text"
          placeholder="  Search by film title..."
          className="searchbar"
          name="title"
          value={search}
          onChange={onChange}
        />
      </div>
    </form>
  );
}

export default SearchBar;
