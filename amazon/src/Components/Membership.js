import React from "react";
import Membeshipplas from "./Membeshipplas";
import { useState } from "react";
import "./Membership.css";

const Membershipplas = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    localStorage.setItem("selectedMembershipPlan", JSON.stringify(plan));
    alert(`You have selected the ${plan.name}`);
  };

  const membershipPlans = [
    {
      id: "basic",
      name: "Basic Membership",
      price: 9.99,
      benefits: [
        "Free standard shipping",
        "Access to exclusive deals",
        "Basic customer support",
      ],
    },
    {
      id: "premium",
      name: "Premium Membership",
      price: 19.99,
      benefits: [
        "Free express shipping",
        "Early access to sales",
        "Premium customer support",
        "Access to premium content",
      ],
    },
    {
      id: "elite",
      name: "Elite Membership",
      price: 29.99,
      benefits: [
        "Free overnight shipping",
        "Personal shopping assistant",
        "Exclusive elite-only deals",
        "Complimentary gifts",
      ],
    },
  ];

  return (
    <React.Fragment>
      <div className="membership-page">
        <h2 className="membershiptitle">Choose Your Membership Plan</h2>
        <div className="membership-plans">
          {membershipPlans.map((plan) => (
            <Membeshipplas
              key={plan.id}
              plan={plan}
              onSelect={handleSelectPlan}
            />
          ))}
        </div>
        {selectedPlan && (
          <div className="selected-plan">
            <h3>You have selected: {selectedPlan.name}</h3>
            <p>Price: ${selectedPlan.price} / month</p>
          </div>
        )}
      </div>
      <img className="membershipimage" src="./Membershipimages/image.png" />
    </React.Fragment>
  );
};

export default Membershipplas;
