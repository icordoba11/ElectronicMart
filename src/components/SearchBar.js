import React, { Fragment } from "react";

export default function SearchBar() {
  return (
    <Fragment>
      <input
        className="input-search"
        type="search"
        placeholder="Search the Store"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <button className="button-search" type="button">
        search
      </button>
    </Fragment>
  );
}
