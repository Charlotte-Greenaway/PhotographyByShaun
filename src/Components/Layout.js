import { Link, Outlet } from "react-router-dom";
import './layout.css';

const Layout = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark "> 
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weddings">
                Weddings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portraits">
                Portraits
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/animalportraits">
                Animals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
      <footer class="footer text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p>&copy; 2023 Photography By Shaun</p>
                    <p>Contact: pbshaun@gmail.com</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
};

export default Layout;
