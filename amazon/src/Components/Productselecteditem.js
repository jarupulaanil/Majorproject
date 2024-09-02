import React from "react";
import "./Productselecteditem.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useStateValue } from "./Stateprovider";

export default function Productselecteditem(props) {
  const { name, image, title, more_info, price, rating } = props;
  const [{ basket }, dispatch] = useStateValue();
  // create the function to remove the items from the slected list
  const removefromlistbutton = () => {
    dispatch({
      type: "remove_from_list",
      name: name,
    });
  };
  return (
    <React.Fragment>
      <div className="items_selected">
        <img alt="image" src={image} className="image" />
        <p className="name">{name}</p>
        <p className="title">{title}</p>
        <p className="text">{more_info}</p>
        <div className="price">
          <CurrencyRupeeIcon className="price_amount" />
          <p className="total_price">{price}</p>
        </div>

        {/* rating the product */}

        <div className="Rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarBorderIcon />
            ))}
        </div>

        {/* remove the product from the sleected list */}
        <button
          className="remove_button btn btn-warning"
          onClick={removefromlistbutton}
        >
          Remove
        </button>

        <hr></hr>
        <button>proceed to cart</button>
      </div>
    </React.Fragment>
  );
}
