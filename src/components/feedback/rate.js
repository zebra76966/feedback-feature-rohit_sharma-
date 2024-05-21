import React, { useState } from "react";
import "./rating.css";

const RateCard = (props) => {
  const [rating, setRating] = useState(0);
  const [thanks, setThanks] = useState(false);

  const Handlesubmit = () => {
    console.log(rating);
    setThanks(true);

    props.setRateSubmitted(true);
  };

  return (
    <div className="p-1">
      <div className="card w-100 border-0 shadow p-2 pb-0 position-relative rounded" style={{ width: "100%" }}>
        <div className="card-body">
          {!thanks && (
            <>
              <p className="lead fw-bold text-dark mt-4 mb-1">Rate your experience with Us?</p>

              <div className="w-100 d-flex align-items-center justify-content-center">
                <div className="rating d-">
                  <input value="5" name="rating" id="star5" type="radio" checked={rating === "5"} onChange={(e) => setRating(e.target.value)} />
                  <label htmlFor="star5"></label>
                  <input value="4" name="rating" id="star4" type="radio" checked={rating === "4"} onChange={(e) => setRating(e.target.value)} />
                  <label htmlFor="star4"></label>
                  <input value="3" name="rating" id="star3" type="radio" checked={rating === "3"} onChange={(e) => setRating(e.target.value)} />
                  <label htmlFor="star3"></label>
                  <input value="2" name="rating" id="star2" type="radio" checked={rating === "2"} onChange={(e) => setRating(e.target.value)} />
                  <label htmlFor="star2"></label>
                  <input value="1" name="rating" id="star1" type="radio" checked={rating === "1"} onChange={(e) => setRating(e.target.value)} />
                  <label htmlFor="star1"></label>
                </div>
              </div>

              {rating !== 0 && (
                <div className="text-center mt-3">
                  <button className="btn btn-dark rounded" onClick={Handlesubmit}>
                    Submit
                  </button>
                </div>
              )}
            </>
          )}

          {thanks && <p className="lead  text-dark mt-4 mb-1">Thank you for taking time to rate us.</p>}
        </div>

        <button className="btn btn-close-muted btn-sm rounded-circle position-absolute top-0 end-0 m-2" onClick={() => props.setRateToggle(false)}>
          <i className="fa fa-times text-dark"></i>
        </button>
      </div>
    </div>
  );
};

export default RateCard;
