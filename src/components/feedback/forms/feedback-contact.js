import React, { useState, useEffect } from "react";
import "./forms.css";

const FormContact = (props) => {
  const [udata, setUdata] = useState({
    name: "",
    email: "",
    mobile: "",
    section: "Concept Card",
  });

  function handleSubmit(e) {
    e.preventDefault();
    props.setToggle(false);
    props.setBubble(true);
    console.log(udata);
  }
  const [isValid, setIsValid] = useState();
  function isValidUdata(data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        if (value == "" || (Array.isArray(value) && value.length === 0)) {
          return false;
        }
      }
    }
    return true;
  }

  useEffect(() => {
    setIsValid(isValidUdata(udata));
  }, [udata]);

  return (
    <form className="form-desk bg-light mb-5 shadow p-4 form w-100 thinScroll" onSubmit={handleSubmit}>
      <div className="mb-4 border-bottom border-2 py-2">
        <h6 className="h5 text-secondary  text-center">
          Let us know waht <strong>your queries</strong> are!
        </h6>
      </div>

      <div class="mb-4">
        <label for="uname" class="form-label">
          Your name <span className="text-danger fw-bold">*</span>
        </label>
        <input
          type="text"
          class="form-control"
          id="uname"
          style={{ borderRadius: "10px" }}
          onChange={(e) => {
            setUdata({ ...udata, name: e.target.value });
          }}
          value={udata.name}
          placeholder="Enter your name"
        />
      </div>

      {!props.islogged && (
        <>
          <div class="mb-4">
            <label for="umail" class="form-label">
              Your Email <span className="text-danger fw-bold">*</span>
            </label>
            <input
              type="email"
              onChange={(e) => {
                setUdata({ ...udata, email: e.target.value });
              }}
              class="form-control"
              id="umail"
              value={udata.email}
              style={{ borderRadius: "10px" }}
              required
              placeholder="Enter your email"
            />
          </div>

          <div class="mb-4">
            <label for="phone" class="form-label">
              Your Mobile Number <span className="text-danger fw-bold">*</span>
            </label>
            <input
              type="tel"
              class="form-control"
              id="phone"
              style={{ borderRadius: "10px" }}
              value={udata.mobile}
              onChange={(e) => {
                setUdata({ ...udata, mobile: e.target.value });
              }}
              placeholder="Enter your number"
            />
          </div>
        </>
      )}

      <div class="mb-3 position-relative ">
        <label for="desc" class="form-label">
          What would you like to ask<span className="text-danger fw-bold">*</span>
        </label>
        <textarea id="desc" rows={10} className="w-100 inputbg p-2 border-muted border-1 border " placeholder="Write here..." style={{ borderRadius: "10px" }}></textarea>
      </div>

      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Send feedback anonymously
        </label>
      </div>

      <div className="w-100 text-end">
        <button type="submit" class="btn btn-dark" disabled={!isValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormContact;
