import { Link } from "react-router-dom";
import "./about-us-info.css"
import FeaturesList from "../features/features-list/features-list";
import FeatureCard from "../features/feature-card/feature-card";
import SocialNetwork from "../social-network/social-network";
import PageContainer from "../ui/page-container/page-container"

function AboutUsInfo() {
  return (
    <section>
      <div className="container">
        <div className="pb-4">
          <h1 className="title">
            Welcome to <span>Selica Productions</span> 🎬🍿
          </h1>
        </div>

        <PageContainer>
          <img className="logo" src="/src/assets/images/logo.webp" alt="logo"></img>
          <h2 className="subtitle"> Journey Into the Heart of Cinema </h2>
          <p>
            We are <strong>Selena</strong> and <strong>Jessica</strong>, the creators of <span className="brand-name">Selica Productions</span>, an interactive platform designed for movie lovers. As students at <strong>Ironhack</strong>, we merged our passions for technology and cinema to bring you an innovative and fun movie discovery experience.
          </p>
          
          <div className="video-container">
            <video className="video" loop muted autoPlay>
              <source src="/src/assets/video/movie-reel.mp4" type="video/mp4" />
            </video>
          </div>

          <FeaturesList>
            <Link to="/watchlist">
              <FeatureCard
                icon="fas fa-video"
                title="Save Movies to Your Watchlist"
                description="Keep track of your favorite films with ease. 🎥" />
            </Link>
            
            <Link to="/movies">
              <FeatureCard
                icon="fas fa-search"
                title="Search & Filters"
                description="Find movies by title or apply filters like genre, rating, or release year 🔍" />
            </Link>

            <Link to="/movies">
              <FeatureCard
                icon="fas fa-sort"
                title="Sort Movies"
                description="Organize movies by popularity, rating, release date, revenue or title 📊" />
            </Link>
            
            <Link to="/mood">
              <FeatureCard
                icon="fas fa-smile"
                title="Mood-Based Recommendations"
                description="Get personalized suggestions based on your mood. 😎" />
            </Link>
            
            <Link to="/map">
              <FeatureCard
                icon="fas fa-map-marker-alt"
                title="Explore Cinemas by Country"
                description="Discover movies from all over the world. 🌍" />
            </Link>
            
            <Link to="/">
              <FeatureCard
                icon="fas fa-film"
                title="Watch Trailers"
                description="Watch movie trailers before making your choice! 🎬" />
            </Link>
          </FeaturesList>
          <p className="pt-3 fw-bold fst-italic">
            "Every line of code is an opportunity to transform ideas into experiences that make a difference."
          </p>
          <p>
            Our mission is to make exploring cinema as exciting as watching it. 🩵
          </p>
          <div className="social-links d-flex gap-4">
            <SocialNetwork 
              link="https://www.facebook.com/IronhackSpain/?locale=es_ES"
              name="facebook-f"
            />
            <SocialNetwork 
              link="https://www.instagram.com/ironhackspain/"
              name="instagram"
            />
            <SocialNetwork 
              link="https://x.com/ironhackspain"
              name="twitter"
            />
          </div>
        </PageContainer>      
      </div>
    </section>
  );
}


export default AboutUsInfo;