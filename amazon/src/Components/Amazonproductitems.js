import React, { useEffect, useState } from "react";
import Header from "./Header.js";
import "./Amazonproductitems.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Productcard from "./Productcard.js";

export default function Amazonproductitems(props) {
  const { id, name, image, rating, price, more_info } = props;
  // for fetching the data from the server
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch TV products
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        let product = await response.json();
        setProducts(product);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <React.Fragment>
      <Header />
      <div className="Productpage">
        <div className="producttopbanner">
          <div className="productitems">Shopping Product</div>
          <div className="productitems_submenu">
            <a href="#section2">Electronics devices shopping</a>
          </div>

          <div className="productitems_submenu">
            <a href="#sectionfashion">Fashion store shopping</a>
          </div>
        </div>

        {/* left side main page */}
        <div className="Productmainpage">
          <div className="productmainpageleftside">
            <div className="mainpageleftsidetitle">
              Category
              <div className="leftsidecontent">
                <div className="leftsidecontenttitile">
                  Computer & Accessories
                </div>
                <div className="leftsidecontenttitile">Macbook</div>
                <div className="leftsidecontenttitile">Amazon prime</div>
                <div className="leftsidecontenttitile">
                  Average customer review
                </div>

                <div className="ratingleftbox">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                </div>

                <div className="leftsidecontenttitile">Electronics</div>
                <div className="leftsidecontenttitile">
                  Average customer review
                </div>

                <div className="leftsidecontenttitile">Cameras</div>
                <div className="leftsidecontenttitile">
                  Average customer review
                </div>

                <div className="leftsidecontenttitile">Laptops</div>
                <div className="leftsidecontenttitile">
                  Average customer review
                </div>
              </div>
            </div>
          </div>

          {/* right sidepage */}

          <div className="productrightsidepage">
            <div className="rightsidepagetopbanner">
              <div className="homedetailsamazonproduct">
                <div className="homedetailslongcardamazon">
                  <div
                    className="longcardtitleamazon"
                    style={{ textAlign: "center", color: "orangered" }}
                  >
                    Shopping cart
                  </div>
                  {/* <Link to="/BestSells">see more</Link> */}
                  <div className="longcarditems">
                    <div className="scrolldivcardsamazon">
                      <div
                        className="longcardsitemsamazonproduct"
                        id="sectionfashion"
                      >
                        {Array.isArray(product) &&
                          product.map((pro) => (
                            <Productcard
                              id={pro.id}
                              name={pro.name}
                              image={pro.image}
                              title={pro.title}
                              more_info={pro.description}
                              price={pro.price}
                              rating={pro.rating}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* electronics devices */}
                <div className="homedetailslongcardamazon">
                  {/* <Link to="/BestSells">see more</Link> */}
                  <div className="longcarditems">
                    <div className="scrolldivcardsamazon">
                      <div
                        className="longcardsitemsamazonproduct"
                        id="sectionfashion"
                      >
                        {
                          <Productcard
                            id={id}
                            name={name}
                            image={image}
                            more_info={more_info}
                            price={price}
                            rating={rating}
                          />
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
