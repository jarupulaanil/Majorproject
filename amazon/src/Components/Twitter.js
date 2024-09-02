import React from "react";
import { Link } from "react-router-dom";

export default function Twitter() {
  return (
    <React.Fragment>
      <div
        style={{ backgroundColor: "cornsilk", margin: "10px", padding: "10px" }}
      >
        <div>Instagram</div>
        <h5>
          You’re about to go outside of Amazon to Twitter.com. Do you want to
          proceed?
        </h5>

        {/* button for proceeding the in instagram */}
        <button
          className="btn btn-warning"
          style={{ margin: "10px", padding: "10px" }}
        >
          <a href="https://x.com/AmazonIN">Go to Twitter.com</a>
        </button>
        <div>
          <button
            className="btn btn-white"
            style={{ margin: "10px", padding: "10px" }}
          >
            <Link to="/home">Stay on amazon</Link>
          </button>
        </div>

        {/* section for the customers viewed accroding to the search */}
        <section>
          <div>
            <hr style={{ color: "black" }} />
            <h4 style={{ color: "black" }}>
              Customers who viewed items in your browsing history also viewed
            </h4>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
