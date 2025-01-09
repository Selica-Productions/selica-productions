import "bootstrap-icons/font/bootstrap-icons.css";
function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3 m-2">
            <h5>About Selica Productions</h5>
            <p>
              Selica Productions is your go-to website for exploring and
              discovering popular movies, new releases, and more.
            </p>
            <p>Join us and create your own personalized watchlist!</p>
          </div>
          <div className="col-md-3 m-2">
            <h5>Contact Us</h5>
            <p>Email: contact@selicaproductions.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="col-md-3 m-2">
            <h5>Follow Us</h5>
            <p>
              <i className="bi bi-facebook"></i> Facebook
            </p>
            <p>
              <i className="bi bi-twitter"></i> Twitter
            </p>
            <p>
              <i className="bi bi-instagram"></i> Instagram
            </p>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center">
          <p className="mb-0">
            &copy; 2024 Selica Productions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
