import React from "react";
import Movie from "./movie";

import Search from "./search";
import "./movie.css";
const movielist =()=> {
    return (
      <div>
        <Search/>
        <Movie/>
      </div>
    );
  }

export default movielist;
