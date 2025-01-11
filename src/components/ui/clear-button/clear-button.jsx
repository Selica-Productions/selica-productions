import "./clear-button.css";

function ClearButton ({ onClear }) {
  return (
    <button className="clear-button" onClick={ onClear }>
      <i className="fa-solid fa-broom"></i>
    </button>
  )
}

export default ClearButton;