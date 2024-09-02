import React from "react";
import "./BasketItemcount.css";
import { useStateValue } from "./Stateprovider";
// import CurrencyFormat from "react-currency-format";
import { gettotalvalue } from "./reducer";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "@mui/material";

export default function BasketItemcount() {
  // getting the values using the usecontext method
  const [{ basket }, dispatch] = useStateValue();

  const clearcart = () => {
    dispatch({
      type: "clearcart",
    });
  };

  return (
    <React.Fragment>
      <div className="basketitemcount">
        <div>
          <p>
            <h3>items {basket.length} selected</h3>
            Total_Amount:
            <span>
              <CurrencyRupeeIcon />
              {gettotalvalue(basket)}
            </span>
            <strong className="count_numbers">({basket.length}.items):</strong>
          </p>

          <div>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains the gift
            </small>
            <Link>
              <button className="check_product" onClick={clearcart}>
                clear cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
