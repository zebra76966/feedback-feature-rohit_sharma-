import React, { useEffect, useState } from "react";
import Feedback from "./feedback/feedback";
import Card from "./card";
import RateCard from "./feedback/rate";

const Main = (props) => {
  const [rateToggle, setRateToggle] = useState(false);
  const [rateSubmitted, setRateSubmitted] = useState(false);
  useEffect(() => {
    if (!rateSubmitted) {
      setTimeout(() => setRateToggle(true), 5000);
    } else {
      setTimeout(() => setRateToggle(false), 5000);
    }
  }, [rateSubmitted]);
  return (
    <div className="w-100 bg-black">
      <div className="container pt-4">
        <div className="row">
          {[...Array(10)].map(() => {
            return (
              <div className="col-12">
                <Card />
              </div>
            );
          })}
        </div>
      </div>

      {rateToggle && (
        <div className="rateModal">
          <RateCard setRateToggle={(e) => setRateToggle(e)} setRateSubmitted={(e) => setRateSubmitted(e)} />
        </div>
      )}
      <Feedback />
    </div>
  );
};

export default Main;
