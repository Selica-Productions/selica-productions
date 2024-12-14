import Dropdown from 'react-bootstrap/Dropdown';
function DropdownFilter({ years = {} }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {years.map( year => {
          return <Dropdown.Item key={year} href="#/action-1">{year}</Dropdown.Item>
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownFilter;