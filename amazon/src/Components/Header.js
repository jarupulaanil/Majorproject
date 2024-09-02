import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreIcon from "@mui/icons-material/More";
import { useStateValue } from "./Stateprovider";
import Productcard from "./Productcard";

export default function Header({ data }) {
  const [{ basket }, dispatch] = useStateValue();

  // function for the drop doown of the list in the header
  const [dropdown, setDropdown] = useState(false);
  const toggledropdownitems = () => {
    setDropdown(!dropdown);
  };

  // close the drop down button
  const closeDropdown = () => {
    setDropdown(false);
  };

  // search bar
  const [value, setValue] = useState("");

  // for dropdown of items
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    "Books",
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Toys",
    // Add more items as needed
  ];

  return (
    <React.Fragment>
      <div className="container ">
        <div className="row ">
          <div className="  Header col-sm-12 ">
            {/* to attribute takes us to required page */}
            <nav>
              <Link to={"/Home"}>
                <img
                  src="./Images/amazonheaderlogo.png"
                  className="headerlogo"
                  alt="logo"
                />
              </Link>
            </nav>

            {/* adding the locations */}
            <div className="location">
              <div className="location_image">
                <LocationOnIcon
                  className="location_image_navbar"
                  sx={{ fontSize: "22px" }}
                />
              </div>

              <div className="location_place">
                <div className="top">Hyderabad pin-500079</div>
              </div>
            </div>

            {/* header search bar and logo */}
            <div className="headersearch">
              <div className="dropdown_icon">
                <a onClick={toggleDropdown} className="dropdown-button">
                  All
                  <ArrowDropDownIcon />
                </a>
                {isOpen && (
                  <ul className="dropdown-menu">
                    {items.map((item, index) => (
                      <li key={index} className="dropdown-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <input
                type="text"
                className="headersearch_input"
                placeholder="Search items..."
                value={value}
                onChange={(e) => setValue(e.target.value)}

                // onChange={handleSearch}
              />
              {data
                .filter((data) => {
                  return value === "" ? data : data.title;
                })
                .map((item, index) => {
                  <Productcard
                    index={index + 1}
                    name={item.name}
                    title={item.title}
                  />;
                })}

              <SearchIcon className="headersearch_icon" />
            </div>

            {/* countries names are added in drop down  */}
            <div className="countryflag_fropdown">
              <img
                className="india_image"
                src="./Images/india.png"
                alt="india_flag"
              />
              EN
              <div className="dropdownarrow">
                <ArrowDropDownIcon />
              </div>
            </div>

            <div className="header_option">
              <div className="headeroptionline_one">Returns</div>
              <span className="headeroptionline_two">& Orders</span>
            </div>

            <div className="header_option">
              <Link to="/Membership">
                <div className="headeroptionline_one">Prime</div>
                <span className="headeroptionline_two">Memebeship</span>
              </Link>
            </div>

            <nav>
              <Link to="/Basket">
                <div className="header_optionBasket">
                  <span className="basket_counter">{basket?.length}</span>
                  <AddShoppingCartIcon />
                </div>
              </Link>
            </nav>

            {/* more otpions */}
            <div className="menu">
              <div className="More_options">
                <button
                  className="dropdown_items"
                  onClick={toggledropdownitems}
                >
                  <MoreIcon />
                </button>
                {/* condition for showing the dropdown */}
                <div>
                  {dropdown && (
                    <div className="dropdown">
                      <button
                        className="dropdown__closeButton"
                        onClick={closeDropdown}
                      >
                        ✖
                      </button>
                      <ul>
                        <Link to="/Amazonproductitems">
                          <li>Todays deals</li>
                        </Link>

                        <Link to="/Amazonproductitems">
                          <li>Electronics</li>
                        </Link>

                        <Link to="/Amazonproductitems">
                          <li>Fashion</li>
                        </Link>
                      </ul>

                      <button
                        className="dropdown__closeButton"
                        onClick={closeDropdown}
                      >
                        close button
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* logout */}
            {/* logout function */}
            <Link to={"/"}>
              <div className="header_option">
                <span className="headeroptionline_logout">
                  <LogoutIcon />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
