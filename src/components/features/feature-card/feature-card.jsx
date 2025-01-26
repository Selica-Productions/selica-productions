import { Link } from 'react-router-dom'
import "./feature-card.css"

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-item">
        <i className={`${icon}`}></i>
        <h3>{`${title}`}</h3>
        <p>{`${description}`}</p>
    </div>
  )
}

export default FeatureCard