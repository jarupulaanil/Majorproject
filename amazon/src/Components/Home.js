import React from "react";
import "./Home.css";
import Productcard from "./Productcard";
import Header from "./Header";
import Todaysdeal from "./Todaysdeal";
import Footer from "./Footer";

export default function Home() {
  const electronics = [
    {
      name: " speaker box",
      image: "./Images/soundbox.png",
      title: "player Box",
      more_info: "music player",
      price: 200,
      rating: 4,
    },
    {
      name: "Redmi 13 C",
      image: "./Images/redmi13c.png",
      title: "Redmi 13c 5G",
      more_info: "Startrail Green, 4GB RAM, 128GB Storage)  ",
      price: 10499,
      rating: 5,
    },
    {
      name: "Smart Watch",
      image: "./Images/noiseplus.png",
      title: "Noise Pulse ",
      more_info: "Smart Watch with Advanced Bluetooth ,wireless  ",
      price: 2150,
      rating: 4,
    },
    {
      name: "boat bluetooth",
      image: "./Images/boat.png",
      title: "Wireless Bluetooth",
      more_info: "boAt Airdopes 311 Pro Truly Wireless",
      price: 978,
      rating: 5,
    },
    {
      name: "One plus",
      image: "./Images/oneplus.png",
      title: "OnePlus Nord CE4 Lite 5G",
      more_info: "Super Silver, 8GB RAM, 128GB Storage",
      price: 16298,
      rating: 5,
    },
    {
      name: "Lenovo Laptop",
      image: "./Images/lenovolaptop.png",
      title: " Lenovo Thinkpad Laptop L480",
      more_info: "8th Generation :: 8350u Processor :: 32 GB",
      price: 25698,
      rating: 5,
    },
    {
      name: "Acer laptop",
      image: "./Images/acer.png",
      title: " Acer Aspire Lite 12th Gen",
      more_info: " intel Core i5-1235U Thin and Light Laptop",
      price: 40990,
      rating: 5,
    },
    {
      name: "Hp laptop",
      image: "./Images/hp.png",
      title: "HP Laptop 15s, 12th Gen Intel Core",
      more_info: "1235U, 15.6-inch (39.6 cm)",
      price: 50609,
      rating: 4,
    },
    {
      name: "Pop Mobile",
      image: "./Images/popphone.png",
      title: "TECNO POP 8  ",
      more_info: "Gravity Black, 4GB+64GB",
      price: 6699,
      rating: 4,
    },
  ];
  return (
    <React.Fragment>
      <Header data={electronics} />

      <div className="homedetails">
        <div className="homedetailslongcard">
          <div className="longcardtitle">Todays deals on Sparks</div>
          {/* <Link to="/BestSells">see more</Link> */}
          <div className="longcarditems">
            <div className="scrolldivcards">
              <div className="longcardsitems">
                {electronics.map((ele) => (
                  <Productcard
                    name={ele.name}
                    image={ele.image}
                    title={ele.title}
                    more_info={ele.more_info}
                    price={ele.price}
                    rating={ele.rating}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Todaysdeal />
      <Footer />
    </React.Fragment>
  );
}
