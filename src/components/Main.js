import React from "react";
import Search from "./utils/Search";

const Main = () => {
  return (
    <div className="Main">
      <div className="container">
        <h3>Check the weather</h3>
        <Search className="main-search" />
      </div>
    </div>
  );
};

export default Main;
