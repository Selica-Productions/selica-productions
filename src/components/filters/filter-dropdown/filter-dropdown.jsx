import Dropdown from 'react-bootstrap/Dropdown';
function FilterDropdown({ type, options = [], onChange }) {
    return (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {type}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {options.map( (option, index) => (
              <Dropdown.Item key={index} onClick={() => onChange(option)}>
                { type === "Genre" ? option.name : option}
              </Dropdown.Item>
            )
            )} 
          </Dropdown.Menu>
        </Dropdown>
      )
}

export default FilterDropdown;