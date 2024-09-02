import React, { useState } from "react";
import "./Countrydropdown.css";

const countries = [
  { name: "United States", code: "US" },
  { name: "Canada", code: "CA" },
  { name: "United Kingdom", code: "GB" },
  { name: "Australia", code: "AU" },
  { name: "India", code: "IN" },
  // Add more countries as needed
];

const Countrydropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="country">
      <label htmlFor="country">Select your country:</label>
      <select id="country" value={selectedCountry} onChange={handleChange}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <div>
          <h2>You selected: {selectedCountry}</h2>
        </div>
      )}
    </div>
  );
};

export default Countrydropdown;
