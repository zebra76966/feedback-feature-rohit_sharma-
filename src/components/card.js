import React from "react";

const Card = (props) => {
  return (
    <div className="p-1 h-100 mb-4">
      <div className="card w-100 border-0 shadow p-2 pb-0 position-relative rounded" style={{ width: "100%" }}>
        <div className="card-body">
          <button className="btn btn btn-info rounded me-2">Design</button>
          <button className="btn btn btn-info rounded">Technology</button>

          <p className="lead fw-bold text-dark  mt-4">
            A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque
            ultrices magna cursus se?
          </p>

          <div className="d-flex justify-content-between mt-3">
            <div className="d-flex align-items center">
              <img className="me-2" src="/icons/eye.svg" /> 100 views
            </div>

            <div className="d-flex align-items center">
              <img className="me-2" src="/icons/info.svg" /> How should you word your answer?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
