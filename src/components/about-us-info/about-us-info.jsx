import { Link } from "react-router-dom";
import "./about-us-info.css"

function AboutUsInfo() {
  return (
    <section className="about-us-section">
      <div className="container">
        <div className="header pb-4">
          <h1 className="title">
            Welcome to <span>Selica Productions</span> 🎬🍿
          </h1>
        </div>

        <div className="content pt-3 d-flex flex-column gap-3 justify-content-center align-items-center">
          <img className="logo" src="/src/assets/images/logo.webp" alt="logo"></img>
          <h2 className="subtitle"> Journey Into the Heart of Cinema </h2>
          <p>
            We are <strong>Selena</strong> and <strong>Jessica</strong>, the creators of <span className="highlight">Selica Productions</span>, an interactive platform designed for movie lovers. As students at <strong>Ironhack</strong>, we merged our passions for technology and cinema to bring you an innovative and fun movie discovery experience.
          </p>
          
          <div className="video-container">
            <video className="video" loop muted autoPlay>
              <source src="/src/assets/video/movie-reel.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="features">
            <Link to="/watchlist">
              <div className="feature-item">
                <i className="fas fa-video"></i>
                <h3>Save Movies to Your Watchlist</h3>
                <p>Keep track of your favorite films with ease. 🎥</p>
              </div>
            </Link>
            
            <Link to="/movies">
              <div className="feature-item">
                <i className="fas fa-search"></i>
                <h3>Search & Filters</h3>
                <p>Find movies by title or apply filters like genre, rating, or release year to refine your results. 🔍</p>
              </div>
            </Link>

            <Link to="/movies">
              <div className="feature-item">
                <i className="fas fa-sort"></i>
                <h3>Sort Movies</h3>
                <p>
                  Organize movies by popularity, rating, release date, revenue or title for a tailored experience. 📊
                </p>
              </div>
            </Link>
            
            <Link to="/mood">
              <div className="feature-item">
                <i className="fas fa-smile"></i> 
                <h3>Mood-Based Recommendations</h3>
                <p>Get personalized suggestions based on your mood. 😎</p>
              </div>
            </Link>
            
            <Link to="/map">
              <div className="feature-item">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Explore Cinemas by Country</h3>
                <p>Discover movies from all over the world. 🌍</p>
              </div>
            </Link>
            
            <Link to="/">
              <div className="feature-item">
                <i className="fas fa-film"></i>
                <h3>Watch Trailers</h3>
                <p>Watch movie trailers before making your choice! 🎬</p>
              </div>
            </Link>
          </div>
          <p className="pt-3 fw-bold fst-italic">
            "Every line of code is an opportunity to transform ideas into experiences that make a difference."
          </p>
          <p>
            Our mission is to make exploring cinema as exciting as watching it. 🩵
          </p>
          <div className="social-links d-flex gap-4">
            <a href="https://www.facebook.com/IronhackSpain/?locale=es_ES" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/ironhackspain/" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/ironhackspain" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>        
      </div>
    </section>
  );
}


export default AboutUsInfo;