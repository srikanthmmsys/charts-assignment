import React from "react";

const CardUi = () => {
  return (
    <div className="d-flex justify-center">
      <div>
        <div className="card-background">
          <p>Sprint Forecast</p>
          <h3>4</h3>
          <p className="card-est-date">(Estimated End Date 30/07/2022)</p>
        </div>
        <div className="card-background">
          <p>SP Completed</p>
          <h3>360</h3>
        </div>
        <div className="card-background">
          <p>Overall Progress</p>
          <h3>95%</h3>
        </div>
      </div>
    </div>
  );
};

export default CardUi;
