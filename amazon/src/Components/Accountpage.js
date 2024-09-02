import React, { useEffect, useState } from "react";

const Accountpage = () => {
  const [membership, setMembership] = useState(null);

  useEffect(() => {
    const savedPlan = localStorage.getItem("selectedMembershipPlan");
    if (savedPlan) {
      setMembership(JSON.parse(savedPlan));
    }
  }, []);

  return (
    <div>
      <h2>My Account</h2>
      {membership ? (
        <div>
          <h3>Your Membership Plan</h3>
          <p>Plan: {membership.name}</p>
          <p>Price: ${membership.price} / month</p>
          <ul>
            {membership.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>You have not selected a membership plan yet.</p>
      )}
    </div>
  );
};

export default Accountpage;
