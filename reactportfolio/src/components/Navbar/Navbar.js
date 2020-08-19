import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbartoggler"
          aria-controls="navbartoggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbartoggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  // window.location.pathname === "/" ||
                  window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={
                  window.location.pathname === "/portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="icon-bar">
            {/* Linkedin */}
            <a
              href=""
              target="blank"
              className="btn btn-ritaprofile stretched-link"
              id="linkedin"
            >
              <i className="fa fa-linkedin fa_custom fa-2x"></i>
            </a>
            {/* github */}
            <a
              href="https://github.com/wsglobe"
              target="blank"
              className="btn btn-ritaprofile"
              id="github"
            >
              <i className="fa fa-github fa_custom fa-2x"></i>
            </a>
            {/* resume */}
            <a
              href=""
              target="blank"
              className="btn btn-ritaprofile"
              id="resume"
            >
              <i className="fa fa-file-pdf-o fa_custom fa-2x"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
