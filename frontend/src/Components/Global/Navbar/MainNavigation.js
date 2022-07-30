import React from "react";
import MainHeader from "./MainHeader";

const MainNavigation = () => {
  return (
    <MainHeader>
      <nav className="navbar navbar-expand-lg bg-light navbar-dark py-4">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img src={require("../../Assets/logo.png")} alt="asd" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
            aria-controls="navmenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item ">
                <a href="#learn" className="nav-link text-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#instructions" className="nav-link text-secondary">
                  Destinations
                </a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link text-secondary">
                  Tours
                </a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link text-secondary">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link text-secondary">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link text-secondary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
