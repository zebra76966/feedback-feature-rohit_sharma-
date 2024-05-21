import React, { useEffect, useState } from "react";
import FormReport from "./forms/report-form";
import FormFeedback from "./forms/feedback-form";
import FormSuggestion from "./forms/suggestion-form";
import FormContact from "./forms/feedback-contact";
import "./feedback.css";

const Feedback = () => {
  const [toggle, setToggle] = useState(false);
  const [form, setForm] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const [sBubble, setBubble] = useState(false);

  useEffect(() => {
    if (sBubble) {
      setTimeout(() => {
        setBubble(false);
      }, 7000);
    }
  }, [sBubble]);

  return (
    <div className={`customModal ${toggle ? "pop" : ""} `}>
      <div className={`position-fixed pop-box ${form !== 0 && toggle ? "active" : ""}`} style={{ zIndex: 99, bottom: "32px", right: "32px" }}>
        <div className={`formBox ${form !== 0 && toggle ? "active" : ""}`}>
          {form == 1 && toggle && <FormReport islogged={isLogged} setToggle={(e) => setToggle(e)} setBubble={(e) => setBubble(e)} />}
          {form == 2 && toggle && <FormFeedback islogged={isLogged} setToggle={(e) => setToggle(e)} setBubble={(e) => setBubble(e)} />}
          {form == 3 && toggle && <FormSuggestion islogged={isLogged} setToggle={(e) => setToggle(e)} setBubble={(e) => setBubble(e)} />}
          {form == 4 && toggle && <FormContact islogged={isLogged} setToggle={(e) => setToggle(e)} setBubble={(e) => setBubble(e)} />}
        </div>

        {sBubble && (
          <div id="sbubble">
            <div className="bubble text-center rounded p-2 rounded">
              {form == 1 && <h6 className="m-0 text-dark">Thanks for bringing the issue to our attention.We'll review it shortly and provide an update soon!</h6>}
              {form == 2 && <h6 className="m-0 text-dark">Thank you for your valuable feedback!</h6>}
              {form == 3 && <h6 className="m-0 text-dark">Thanks for your valuable suggestion!</h6>}
              {form == 4 && <h6 className="m-0 text-dark">We will get back to you as soon as possible!</h6>}
            </div>
          </div>
        )}

        <div className={`${toggle ? "active" : ""}  ${form !== 0 ? "formActive" : ""}`} id="wrapperShare">
          <button
            className={`shareBtn ${toggle ? "active" : "notActive"} ${form !== 0 ? "formActive" : ""}`}
            id="toggler"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {/* <i className={`fs-5 fa ${toggle ? "fa fa-times" : "fa-share"}`}></i> */}

            {window.innerWidth >= 900 && <img className={`${!toggle ? "ms-1" : "ms-0"} `} src={`/icons/${toggle ? "close.svg" : "toogle-desk.svg"}`} />}
            {window.innerWidth < 900 && <img src={`/icons/${toggle ? "close.svg" : "toogle-mobile.svg"}`} />}
          </button>

          <div className={`d-flex align-items-center item`} onClick={() => setForm(form == 1 ? 0 : 1)} id="a">
            <h6 className="bg-light rounded text-dark p-2 me-2 my-0 toolTip">Report and Issue</h6>
            <div className={`icon ${form == 1 ? "activeFormBtn" : ""}`}>
              <a className={`btn shareBtn fs-3 `}>
                <img src="/icons/report.svg" />
              </a>
            </div>
          </div>

          <div className={`d-flex align-items-center item`} onClick={() => setForm(form == 2 ? 0 : 2)} id="b">
            <h6 className="bg-light rounded text-dark p-2 me-2 my-0 toolTip">Share Feedback</h6>
            <div className={`icon ${form == 2 ? "activeFormBtn" : ""}`}>
              <a className={`btn shareBtn fs-3 `}>
                <img src="/icons/feedback.svg" />
              </a>
            </div>
          </div>

          <div className={`d-flex align-items-center item`} onClick={() => setForm(form == 3 ? 0 : 3)} id="c">
            <h6 className="bg-light rounded text-dark p-2 me-2 my-0 toolTip">Give Suggestion</h6>
            <div className={`icon ${form == 3 ? "activeFormBtn" : ""}`}>
              <a className={`btn shareBtn fs-3 `}>
                <img src="/icons/suggestion.svg" />
              </a>
            </div>
          </div>

          <div className={`d-flex align-items-center item`} onClick={() => setForm(form == 4 ? 0 : 4)} id="d">
            <h6 className="bg-light rounded text-dark p-2 me-2 my-0 toolTip">Contact Us</h6>
            <div className={`icon ${form == 4 ? "activeFormBtn" : ""}`}>
              <a className={`btn shareBtn fs-3 `}>
                <img src="/icons/contact.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
