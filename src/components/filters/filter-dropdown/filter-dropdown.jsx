import Dropdown from 'react-bootstrap/Dropdown';
function FilterDropdown({ type, options = [], onSelected }) {
    return (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {type}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {options.map( (option, index) => (
              <Dropdown.Item key={index} onClick={() => onSelected( option )}>
                { type === "Genre" ? option.name : option}
              </Dropdown.Item>
            )
            )} 
          </Dropdown.Menu>
        </Dropdown>
      )
}

export default FilterDropdown;