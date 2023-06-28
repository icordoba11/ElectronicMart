import React, { Fragment } from "react";
import { Link, navLink } from "react-router-dom";
import "../assets/css/stylesheet.css";
import User from './User'
import VerticalMenu from "./VerticalMenu";
import SearchBar from './SearchBar'
import Cart from "./Cart";
import HorizontalMenu from "./HorizontalMenu";


export default function NavBar() {
  return (
    <Fragment>
      <header className="header">
        <div id="top-bar">
          <div>
            <p>Get 30% Discount on Selected Items</p>
          </div>
        </div>

        <div className="subheader">
          <h1>
            ElectronicMart<span id="dota">.</span>
          </h1>
          <div className="search">
            <div className="input-search-container">
              <SearchBar />
            </div>
          </div>
          <div className="icon-search">
            <div className="dropdown">
              <User />
            </div>
            <div className="dropdown">
              <Cart />
            </div>
          </div>
        </div>
      </header>

      <section class="section1">
        <VerticalMenu />

        <div>
          <HorizontalMenu />
          {/* <CarrouselOffers /> */}
        </div>
      </section>
    </Fragment>
  );
}