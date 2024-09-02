import React from "react";
import "./Todaysdeals.css";
// import { Link } from "react-router-dom";
import Productcard from "./Productcard";

export default function Todaysdeal() {
  // create an array of object for the phone
  const shoes = [
    {
      name: "Sparks casuals ",
      image: "./Todaysdealimages/1.png",
      title: "Ligh Blue",
      more_info: " Casual Canvas Shoes Sneakers sizes for all",
      price: 469,
      rating: 5,
    },
    {
      name: "Sparks casuals",
      image: "./Todaysdealimages/3.png",
      title: "Color Brown",
      more_info: " Casuals party wears for men ",
      price: 640,
      rating: 5,
    },
    {
      name: "Sparks casuals",
      image: "./Todaysdealimages/4.png",
      title: "Light gray",
      more_info: "Casuals party wears for men  ",
      price: 14900,
      rating: 5,
    },
    {
      name: "Sparks casuals",
      image: "./Todaysdealimages/5.png",
      title: "color black",
      more_info: "Casuals party wears for men  ",
      price: 780,
      rating: 5,
    },
    {
      name: "Sparks casuals",
      image: "./Todaysdealimages/6.png",
      title: "green color",
      more_info: "Casuals party wears for men ",
      price: 980,
      rating: 5,
    },
    {
      name: "Sparks casuals",
      image: "./Todaysdealimages/7.png",
      title: "blue",
      more_info: "Casuals party wears for men  ",
      price: 1100,
      rating: 5,
    },
    {
      name: "Sparks casuals",
      image: "./Todaysdealimages/8.png",
      title: "white sneakers",
      more_info: "Casuals party wears for men  ",
      price: 1900,
      rating: 5,
    },
    {
      name: "Sparks casuals",
      image: "./Todaysdealimages/9.png",
      title: "multicolor sneakers",
      more_info: "Casuals party wears for men  ",
      price: 1900,
      rating: 5,
    },
    {
      name: "Sparks casuals",
      image: "./Todaysdealimages/10.png",
      title: "multiple color",
      more_info: "SCasuals party wears for men  ",
      price: 1100,
      rating: 5,
    },
  ];
  // for mobiles

  const mobilephones = [
    {
      name: "Oneplus pro",
      image: "./Todaysdealimages/image copy 11.png",
      title: "OnePlus Pro light gray color",
      more_info: "5GB RAM, 128GB Storage ,camera 48mp front ",
      price: 14900,
      rating: 5,
    },
    {
      name: "Redmi 13C",
      image: "./Todaysdealimages/image copy 12.png",
      title: "Redmi 13c 5G",
      more_info: "Startrail Green, 4GB RAM, 128GB Storage)  ",
      price: 14900,
      rating: 5,
    },
    {
      name: "Realme Narzo",
      image: "./Todaysdealimages/image copy 13.png",
      title: "Realme 5G",
      more_info: "Startrail gold, 128GB Storage,13Mp,48+5+25MP)  ",
      price: 14900,
      rating: 5,
    },
    {
      name: "O2",
      image: "./Todaysdealimages/image copy 14.png",
      title: "O2 5G",
      more_info: "color_Green, 4GB RAM, 128GB Storage,8Mp 32Mp",
      price: 14900,
      rating: 5,
    },
    {
      name: "IQOO",
      image: "./Todaysdealimages/image copy 15.png",
      title: "IQOO Z9Lite 5G",
      more_info: "Blue, 4GB RAM,128GB and 32Mp 64mp rear camera  ",
      price: 14900,
      rating: 5,
    },
    {
      name: "HMD CREST 5G",
      image: "./Todaysdealimages/image copy 16.png",
      title: "HMD CREST 5G ,color-black ,4GB RAM,128gb",
      more_info: "camera 16Mp reaer and 48Mp back cam",
      price: 9900,
      rating: 5,
    },
    {
      name: "Realme Narzoo 63",
      image: "./Todaysdealimages/image copy 17.png",
      title: "Realme 5G,128gb processor14 snapdrag-7",
      more_info: "14Mp rear and 5Mp back  ",
      price: 8900,
      rating: 5,
    },
    {
      name: "Realme Narzoo ",
      image: "./Todaysdealimages/image copy 18.png",
      title: "Realme Narzoo  5G",
      more_info: "Startrail Green, 4GB RAM, 128GB Storage  ",
      price: 11900,
      rating: 5,
    },
    {
      name: "Realme Narzoo N61",
      image: "./Todaysdealimages/image copy 19.png",
      title: "Realme Narzo 5G,256gb intenal storage",
      more_info: "color light blue,cam:5mp,48Mp  ",
      price: 14900,
      rating: 5,
    },
    {
      name: "POCO M6",
      image: "./Todaysdealimages/image copy 20.png",
      title: "POCO 5G",
      more_info: "Startrail black, 4GB RAM, 128GB Storage)  ",
      price: 16900,
      rating: 5,
    },
  ];

  // furniturs

  const furniturs = [
    {
      name: "Sofa",
      image: "./Todaysdealimages/image copy 1.png",
      title: "Sofa with pillows",
      more_info:
        " A sofa that can be converted into a bed, also known as a sofa bed. ",
      price: 12900,
      rating: 5,
    },
    {
      name: "Loveseat",
      image: "./Todaysdealimages/image copy 2.png",
      title: "small table for placing things",
      more_info:
        "A smaller  designed to seat two people and can place the smaller things over there ",
      price: 1500,
      rating: 5,
    },
    {
      name: "Sleeper Sofa ",
      image: "./Todaysdealimages/image copy 3.png",
      title: "Sleeper",
      more_info:
        "- A sofa that can be converted into a bed, also known as a sofa bed ",
      price: 1500,
      rating: 5,
    },
    {
      name: "Recliner Sofa ",
      image: "./Todaysdealimages/image copy 4.png",
      title: "Recliner Sofa",
      more_info:
        "- A sofa with seats that can recline backward, often equipped with footrests.",
      price: 18900,
      rating: 5,
    },
    {
      name: "Settee ",
      image: "./Todaysdealimages/image copy 5.png",
      title: "Settee",
      more_info: "- A smaller, more formal sofa, often with a higher back.  ",
      price: 24900,
      rating: 5,
    },
    {
      name: "Chesterfield ",
      image: "./Todaysdealimages/image copy 6.png",
      title: "Chesterfield",
      more_info:
        "- A classic style sofa characterized by deep button tufting, rolled arms, and a uniform height",
      price: 35000,
      rating: 5,
    },
    {
      name: "Bridgewater Sofa ",
      image: "./Todaysdealimages/image copy 7.png",
      title: "Bridgewater Sofa",
      more_info:
        "- A casual sofa with low arms, a slightly rolled back, and loose seat cushions.  ",
      price: 34900,
      rating: 5,
    },
    {
      name: "Hange chair",
      image: "./Todaysdealimages/image copy 8.png",
      title: "chair",
      more_info:
        " placed at the balcony for relaxing ,can be places inside th house",
      price: 10900,
      rating: 5,
    },
    {
      name: "Knole Sofa ",
      image: "./Todaysdealimages/image copy 9.png",
      title: "Knole Sofa",
      more_info:
        "- An antique-style sofa with adjustable sides and high arms that can be tied back with cords.  ",
      price: 10900,
      rating: 5,
    },
    {
      name: "Amazon_FireCabriole Sofa ",
      image: "./Todaysdealimages/image copy 10.png",
      title: "Amazon_FireCabriole Sofa",
      more_info:
        "- A sofa with an exposed wood frame and a continuous curve from the arms to the back.stick ",
      price: 14900,
      rating: 5,
    },
  ];
  return (
    <div className="homedetails">
      <div className="homedetailslongcard">
        <div className="longcardtitle">
          Todays deals on Men's Comfortable & Smart Canvas
        </div>
        {/* <Link to="/BestSells">see more</Link> */}
        <div className="longcarditems">
          <div className="scrolldivcards">
            <div className="longcardsitems">
              {shoes.map((shoes) => (
                <Productcard
                  name={shoes.name}
                  image={shoes.image}
                  title={shoes.title}
                  more_info={shoes.more_info}
                  price={shoes.price}
                  rating={shoes.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* for mobile data */}

      <div className="homedetailslongcard">
        <div className="longcardtitle">Todays deals on Mobiles</div>
        {/* <Link to="/BestSells">see more</Link> */}
        <div className="longcarditems">
          <div className="scrolldivcards">
            <div className="longcardsitems">
              {mobilephones.map((phones) => (
                <Productcard
                  name={phones.name}
                  image={phones.image}
                  title={phones.title}
                  more_info={phones.more_info}
                  price={phones.price}
                  rating={phones.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* furnitures */}
      <div className="homedetailslongcard">
        <div className="longcardtitle">Todays deals on furnitures</div>
        {/* <Link to="/BestSells">see more</Link> */}
        <div className="longcarditems">
          <div className="scrolldivcards">
            <div className="longcardsitems">
              {furniturs.map((phones) => (
                <Productcard
                  name={phones.name}
                  image={phones.image}
                  title={phones.title}
                  more_info={phones.more_info}
                  price={phones.price}
                  rating={phones.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
