import Dropdown from 'react-bootstrap/Dropdown';
import "./filter-dropdown.css"

function FilterDropdown({ type, options = [], onSelected }) {
    return (
        <Dropdown className="button-dropdown">
          <Dropdown.Toggle className="button-dropdown" variant="success" id="dropdown-basic">
            {type}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {options.map( (option, index) => (
              <Dropdown.Item className="item-dropdown" key={index} onClick={() => onSelected( option )}>
                { type === "Year" ? option : option.label }
              </Dropdown.Item>
            )
            )} 
          </Dropdown.Menu>
        </Dropdown>
      )
}

export default FilterDropdown;