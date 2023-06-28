import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import img6 from "../assets/images/hot-discount.png";


export default function HorizontalMenu() {
  return (

    <nav class="hor-navBar">
      <NavLink to={'/'} className="navLink-hor">About us</NavLink>
      <NavLink to={'/'} className="navLink-hor">Blog</NavLink>
      <NavLink to={'/'} className="navLink-hor">Contact Us</NavLink>
      <NavLink to={'/'} className="navLink-hor">Services</NavLink>
      <NavLink to={'/'} className="navLink-hor">Brand</NavLink>
      <img src={img6} alt="discount-porcent" />
      <NavLink to={'/'} className="navLink-hor"> Flash Deals</NavLink>
    </nav>


  );
}
