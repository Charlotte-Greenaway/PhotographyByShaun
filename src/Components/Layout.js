import { Link, Outlet } from "react-router-dom";
import './layout.css';
import {useRef} from 'react';

const Layout = () => {
  const navbarRef = useRef(null); // Create a ref for the collapse element

  // Function to close the collapse menu
  const closeCollapse = () => {
    if (navbarRef.current) {
      navbarRef.current.classList.remove("show");
    }
  };

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
  <div className="collapse navbar-collapse" id="navbarNav" ref={navbarRef}>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/" >
          Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="https://www.facebook.com/profile.php?id=100045854456172" target="_blank" rel="noopener" onClick={closeCollapse}>
          Blog <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="#"
          id="navbarDropdownPortfolio"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Portfolio
        </Link>
        <div
          className="dropdown-menu"
          aria-labelledby="navbarDropdownPortfolio"
        >
          <Link className="dropdown-item" to="/weddings" onClick={closeCollapse}>
            Weddings
          </Link>
          <Link className="dropdown-item" to="/portraits" onClick={closeCollapse}>
            Portraits
          </Link>
          <Link className="dropdown-item" to="/animalportraits" onClick={closeCollapse}>
            Animals
          </Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact" onClick={closeCollapse}>
          Contact
        </Link>
      </li>
    </ul>
  </div>
</nav>
      <Outlet />
      <footer className="footer text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p>&copy; 2023 Photography By Shaun</p>
                    <p>Email: <a href="mailto:name@rapidtables.com?subject=Website%enquiry">pbshaun@gmail.com</a></p>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
};

export default Layout;
