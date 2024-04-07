import React from "react";

function Search(props) {
  return (
    <div className="search-container">
      <h1 className="search-title">Find the best deals today in India</h1>
      <div className="search-box">
        <input
          className="input"
          type="text"
          placeholder={"Search for coupons, deals, stores etc."}
        />
        <button className="search-btn">SEARCH</button>
      </div>
    </div>
  );
}

export default Search;
