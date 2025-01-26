import "./social-network.css"

function SocialNetwork({ link, name }) {
  return (
    <>
        <a href={link} className="social-icon">
            <i className={`fab fa-${ name }`}></i>
        </a>
    </>
  )
}

export default SocialNetwork