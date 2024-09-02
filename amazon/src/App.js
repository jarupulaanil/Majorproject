import React from "react";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Basket from "./Components/Basket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Amazonproductitems from "./Components/Amazonproductitems";
import Membership from "./Components/Membership";
import Aboutus from "./Components/Aboutus";
import Instagram from "./Components/Instagram";
import Twitter from "./Components/Twitter";
import Facebook from "./Components/Facebook";
import Sellonamazon from "./Components/Sellonamazon";

// creating the browse router for rendering the child components

// install the tostify for showing the messages
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="/Register" element={<Register />} />

          <Route path="/Amazonproductitems" element={<Amazonproductitems />} />

          <Route path="/Membership" element={<Membership />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/Instagram" element={<Instagram />} />
          <Route path="/Twitter" element={<Twitter />} />
          <Route path="/Facebook" element={<Facebook />} />
          <Route path="/sellonamazon" element={<Sellonamazon />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
