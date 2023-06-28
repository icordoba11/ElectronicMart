import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import img3 from "../assets/images/menu-bar.png";
import img4 from "../assets/images/down-arrow.png.png";
import img5 from "../assets/images/plus.png";

export default function VerticalMenu() {
  return (
    <Fragment>
      <div>
        <div className="btn-group">
          <button
            className="btn btn-secondary btn-lg dropdown-toggle fake-button"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={img3} alt="menu-icon" />
            All Categories
          </button>

          <ul className="dropdown-menu position-drop-down">
            <div className="vertical-nav-s1">
              <NavLink to={"/Kids"} className="navLink">
                kids
              </NavLink>
              <NavLink to={"/Glass"} className="navLink">
                Glass
              </NavLink>
              <NavLink to={"/Laptop"} className="navLink">
                Laptop
              </NavLink>
              <NavLink to={"/OrganicStaples"} className="navLink">
                Organic Staples
              </NavLink>
              <NavLink to={"/Religious"} className="navLink">
                Religious
              </NavLink>
              <NavLink to={"/ShopAll"} className="navLink">
                Shop All
              </NavLink>
              <NavLink to={"/Women"} className="navLink">
                Women
              </NavLink>
              <NavLink to={"/Bath"} className="navLink">
                Bath
              </NavLink>
              <NavLink to={"/Garden"} className="navLink">
                Garden
              </NavLink>
              <NavLink to={"/Kitchen"} className="navLink">
                Kitchen
              </NavLink>
              <NavLink
                to={"/MoreCategories"}
                className="navLink more-width-container"
              >
                <img src={img5} alt="plus" /> More Categories
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
