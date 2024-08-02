import React from 'react';
import newapiData from "../api/apiData.json";
import Lists from "./Lists";
import './Style.css'; // Import your CSS file here if needed

const Destructuring = () => {
  return (
    <div className="grid">
      <h2>Destructuring</h2>
      <div className="card-container">
        {newapiData.map((data, index) => (
          <Lists key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Destructuring;
