import React from "react";
import "./Basket.css";
import BasketItemcount from "./BasketItemcount";
import Productselecteditem from "./Productselecteditem";
import { useStateValue } from "./Stateprovider";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Basket() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <React.Fragment>
      <Header />

      <div>
        <div className="row">
          <div className="col-sm-7 ">
            <img
              alt="basket_add"
              className="basket_image"
              src="./Images/Basket.png"
            />
            <h2 className="basket_heading">Your Shopping Basket</h2>
          </div>
          <div className="basket_rightside col-sm-5 bg-secondary">
            <BasketItemcount />
          </div>
        </div>

        {/* create another row for product items with price name */}
        <div className="row">
          <div className="  col-sm-12  mx-4 my-4 pd-5 ">
            <h2 className="product_list" style={{ textAlign: "center" }}>
              Product list
            </h2>
            {/* <Productselecteditem/> */}
            {basket.map((item) => (
              <Productselecteditem
                name={item.name}
                image={item.image}
                title={item.title}
                more_info={item.more_info}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
      {/* importing the header component it should be seen when clicks the basket buttona  */}
    </React.Fragment>
  );
}
