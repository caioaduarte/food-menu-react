import React, { useEffect, useState } from "react";
import axios from "axios";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="footer" style={{ backgroundColor: "brown" }}>
      <h1>Menu with React.js</h1>
      <a style={{ margin: "10px", color: "white" }}>Home</a>
      <a style={{ margin: "10px", color: "white" }}>Order</a>
      <a style={{ margin: "10px", color: "white" }}>Contact Us</a>
    </div>
  );
}

export default Navbar;
