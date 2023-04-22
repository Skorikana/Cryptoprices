import {Link} from "react-router-dom";
import React from "react";

export default function Nav (props){
  return (
    <div className="nav">
        <Link to="/">
        <div>HOME</div>
      </Link>
      <Link to="/price">
        <div>CRYPTO PRICES</div>
      </Link>
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
};
//the link components should match the path in app.js
