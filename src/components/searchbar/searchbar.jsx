function SearchBar({ filter, onSearchFilter }) {
  const onFilter = (event) => {
    const { name, value } = event.target 
    onSearchFilter({...filter, [name]: value })
  }
  return (
    <input
      id="search"
      type="text"
      placeholder="Search for the film title..."
      className="form-control mb-3"
      name="title"
      onChange={onFilter}
    />
  );
}

export default SearchBar;
