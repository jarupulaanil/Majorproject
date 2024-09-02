import React from "react";

export default function Sellonamazon() {
  return (
    <div style={{ backgroundColor: "lightblue", height: "800px" }}>
      <img
        style={{
          width: "300px",
          height: "200px",
          textAlign: "center",
          display: "flex",
          marginLeft: "300px",
        }}
        src="https://f.media-amazon.com/images/G/31/amazonservices/landing/PR1_Web_Asset-Revised.webp"
      ></img>

      <h3 style={{ textAlign: "center" }}>Become a seller on the amazon.com</h3>
      <div style={{ textAlign: "center" }}>
        Sell on Amazon.in, India's most visited shopping destination and get a
        chance to get benefits worth ₹23,000
      </div>
      <button className="btn btn-warning" style={{ textAlignLast: "center" }}>
        Start Selling
      </button>
    </div>
  );
}
