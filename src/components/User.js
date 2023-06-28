import React, { Fragment } from "react";
import img1 from "../assets/images/user.png";

export default function User() {
  return (
    <Fragment>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src={img1} alt="user-login" />
      </button>
      <ul class="dropdown-menu">
        <span>Algo</span>
        <br />
        <span>Algo2</span>
        <br />
        <span>lgo3</span>
      </ul>
    </Fragment>
  );
}
