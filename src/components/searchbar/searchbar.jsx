function SearchBar({ filter, onSearchFilter }) {
  const onFilter = (event) => {
    const { name, value } = event.target 
    onSearchFilter({...filter, [name]: value })
  }
  return (
    <form className="d-flex gap-1" role="search">
      <input
        id="search"
        type="text"
        placeholder="Search for the film title..."
        className="form-control me-2"
        name="title"
        onChange={onFilter}/>
      <button className="btn btn-light text-info" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
