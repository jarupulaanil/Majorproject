import React from "react";

const Membershipplas = ({ plan, onSelect }) => (
  <div className="membership-plan">
    <h3>{plan.name}</h3>
    <p>Price: ${plan.price} / month</p>
    <ul>
      {plan.benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
      ))}
    </ul>
    <button onClick={() => onSelect(plan)}>Choose Plan</button>
  </div>
);

export default Membershipplas;
