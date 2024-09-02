import React, { useState } from "react";
import "./Productcard.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useStateValue } from "./Stateprovider";

export default function Productcard(props) {
  const { id, name, image, title, more_info, price, rating } = props;
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

  const additem = () => {
    // when clcik the add item  button it pulls the data from card
    dispatch({
      type: "Additem",
      item: {
        id: id,
        name: name,
        image: image,
        title: title,
        more_info: more_info,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <React.Fragment>
      <div className="Product_card">
        <div className="card bg-white">
          <p>{name}</p>
          <div className="card-body">
            <img alt="cardimage" src={image} className="cardimage" />
            <p className="card-title">{title}</p>
            <p className="card-text">{more_info}</p>
            <p className="card-price">
              <strong>
                <CurrencyRupeeIcon className="rupeeicon" />
                {price}
              </strong>
            </p>

            <button className="card_button btn  btn-warning" onClick={additem}>
              Additem
            </button>

            <div className="product_rating">
              {Array(rating)
                .fill()
                .map((_) => (
                  <StarBorderIcon />
                ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
