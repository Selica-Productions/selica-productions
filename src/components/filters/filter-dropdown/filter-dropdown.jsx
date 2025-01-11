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
                { type === "Year" ? option : option.label }
              </Dropdown.Item>
            )
            )} 
          </Dropdown.Menu>
        </Dropdown>
      )
}

export default FilterDropdown;