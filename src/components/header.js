import React from "react";
const Header = () => {
  return (
    <div className="container-fluid pt-4 position-sticky top-0 left-0 w-100 bg-black" style={{ zIndex: "99" }}>
      <nav class="navbar navbar-expand-lg navbar-dark  p-lg-3 p-2 border-bottom border-2 border-dark">
        <div class="container-fluid">
          <a class="navbar-brand p-1" href="#">
            <h6 className="h6">
              THE <span className="bg-light p-1 text-dark">PRODUCT</span> PLATFORM
            </h6>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ms-auto">
              <button class="btn border-0 text-light fs-6 rounded-circle  me-2" type="button">
                Learn
              </button>
              <button class="btn border-0 text-light fs-6 rounded-circle  me-2" type="button">
                Practice
              </button>
              <button class="btn border-0 text-light fs-4 rounded-circle" type="button">
                <i className="fa fa-user"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
