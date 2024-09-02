import React, { useEffect, useState } from "react";
import "./Footer.css";
import Countrydropdown from "./Countrydropdown";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import { Link } from "@mui/material";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="footer">
        <div className="back-to-top">
          {isVisible && (
            <button onClick={scrollToTop}>
              ↑<PanToolAltIcon />
            </button>
          )}
        </div>
        <div className="footercontent">
          <div className="footercontenttitle">
            Get to know us
            <div className="subtitleoffooter">
              <div className="footercontent" typeof="button">
                {" "}
                <a href="Aboutus">About us </a>
              </div>
            </div>
          </div>

          {/* connect with us */}
          <div className="footercontenttitle">
            Connect with us
            <div className="subtitleoffooter">
              <div className="footercontent">
                <a href="/Instagram"> Instagram </a>
              </div>
              <div className="footercontent">
                <a href="/Twitter"> Twitter </a>
              </div>
              <div className="footercontent">
                <a href="/Facebook"> FaceBook </a>
              </div>
            </div>
          </div>

          {/* Make money with us */}
          <div className="footercontenttitle">
            Make money with us
            <div className="subtitleoffooter">
              <div className="footercontent">
                <a href="/sellonamazon">Sell on amazon</a>
              </div>

              <div className="footercontent">Fullfillment by amazon</div>
            </div>
          </div>

          {/* Help center */}
          <div className="footercontenttitle">
            Lets Us Help You
            <div className="subtitleoffooter">
              <div className="footercontent">
                <Link to="/home">Your Account</Link>
              </div>
              <div className="footercontent">Returns Center</div>
            </div>
          </div>
        </div>
        {/* conditions use and sale */}
        <span className="conditions">
          Conditions of Use & Sale
          <h6>Privacy Notice Interest-Based Ads ©</h6>
          <h6>1996-2024, Amazon.com, Inc. or its affiliates</h6>
        </span>

        {/* logo and country and language */}
        <div className="logoandlanguage">
          <Countrydropdown />
          <img className="imagelogofooteer" src="./Images/image.png" />
        </div>
      </div>
    </React.Fragment>
  );
}
