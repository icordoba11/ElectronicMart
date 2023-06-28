import React, { Fragment } from "react";
import img2 from "../assets/images/shopping-cart.png";

export default function Cart() {
    return (

        <Fragment>
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <img src={img2} alt="" />
            </button>
            <ul class="dropdown-menu">
                {/* <li><NavLink  className="dropdown-item" to={'/'}>Action</NavLink></li>
                            <li><NavLink  className="dropdown-item" to={'/'}>Another action</NavLink></li>
                            <li><NavLink  className="dropdown-item" to={'/'}>Something else here</NavLink></li> */}
            </ul>
        </Fragment>
    );
}
