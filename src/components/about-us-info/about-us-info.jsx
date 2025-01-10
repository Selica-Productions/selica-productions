import { Link } from "react-router-dom";
import "./about-us-info.css"

function AboutUsInfo() {
  return (
    <section className="about-us-section d-flex flex-column gap-4">
      <h1>About Us</h1>
      <h2>🍿 Journey Into the Heart of Cinema 🍿</h2>

      <div className="about-us-content">
        <p>
            Welcome!👋 We are Selena and Jessica, the creators of 
            <strong> 
                <Link className="about-link" to="/"> Selica Productions </Link> 
            </strong>, 
            an interactive platform designed for movie lovers. 
        </p>
        <p>
            Here you can save your favorite movies to your 
            <strong> 
                <Link className="about-link" to="/watchlist"> Watchlist </Link> 🎥
            </strong>, 
            search for movies by name, 
            <strong> 
                <Link className="about-link" to="/movies"> filter</Link> 
            </strong> by multiple criteria 🔍, 
            check out reviews 📝, find personalized recommendations based on your 
            <strong> 
                <Link className="about-link" to="/mood"> mood </Link> 
            </strong>😎, 
            and explore movies by country of origin through an 
            <strong> 
                <Link className="about-link" to="/map"> interactive map</Link> 🌍
            </strong>.
        </p>

        <p>
            Selica Productions is the result of our passion for technology and cinema. 
            As students at <strong>Ironhack</strong>, we set out to combine both worlds to provide you with a unique experience. 
            <em>"Every line of code is an opportunity to transform ideas into experiences that make a difference."</em>
        </p>

        <p>
            What's our goal? To make exploring cinema as exciting as watching it.
        </p>

        <p>
          🌟 <strong>Start exploring now and make your cinematic experience unforgettable!</strong>
        </p>
      </div>
      <div className="d-flex justify-content-end">
        <img className="w-25" src="/src/assets/images/reel.webp" />
      </div>
    </section>
  )
}

export default AboutUsInfo;