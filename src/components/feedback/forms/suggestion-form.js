import React, { useState, useEffect } from "react";
import "./forms.css";

const FormSuggestion = (props) => {
  const [udata, setUdata] = useState({
    section: "Concept Card",
    all_images: [],
    desc: "",
    email: "",
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
          Share your <strong>Suggestion</strong> with us for a chance to earn rewards!
        </h6>
      </div>

      <div className="mb-4">
        <label for="exampleInputEmail1" class="form-label">
          Choose a section
        </label>
        <div class="dropdown">
          <button
            class="btn  px-2 py-3 fs-6 form-select btn-sm text-muted dropdown-toggle mb-3 border-1 border  border-muted w-100 d-flex align-items-center justify-content-between"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
            style={{ borderRadius: "10px" }}
          >
            {udata.section}
          </button>

          <ul class="dropdown-menu w-100 no-scroll border-1 border-muted mt-0" aria-labelledby="dropdownMenuButton">
            {["Concept Card", "Interview Questions", "Practice  Questions", "Quizzes", "Other"].map((jini, k) => {
              return (
                <li onClick={() => setUdata({ ...udata, section: jini })}>
                  <a class="dropdown-item" href="#">
                    <label for={`section${k}`} style={{ width: "100%", cursor: "pointer" }}>
                      <div class={`d-flex justify-content-between px-0 w-100 py-2 ${udata.section == jini ? "text-dark fw-bold" : ""}`}>
                        <span className=" d-flex align-items-center w-75">
                          <label class="form-check-label text-capitalize" for={`section${k}`}>
                            {jini}
                          </label>
                        </span>
                      </div>
                    </label>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div class="mb-3 position-relative ">
        <label for="desc" class="form-label">
          Describe the issue in detail <span className="text-danger fw-bold">*</span>
        </label>
        <textarea
          id="desc"
          rows={10}
          onChange={(e) => {
            setUdata({ ...udata, desc: e.target.value });
          }}
          className="w-100 inputbg p-2 border-muted border-1 border "
          placeholder="Write here..."
          style={{ borderRadius: "10px" }}
          value={udata.desc}
          required
        ></textarea>

        <label
          for="file"
          class="form-label"
          className="btn inputbg-dark position-absolute  start-0 ms-2"
          style={{ zIndex: "99", bottom: "15px", pointerEvents: udata.all_images.length < 2 ? "auto" : "none" }}
        >
          <img src="/icons/paperclip.svg" className="me-2" />
          Attach
          <input
            className="form-file d-none"
            id="file"
            type="file"
            onChange={async (e) => {
              let files = e.target.files;
              let newall_images = [...udata.all_images];
              const maxFilesAllowed = 2;
              const acceptedFormats = ["image/jpeg", "image/jpg", "image/png"];

              // Filter out files that do not match the accepted formats
              files = Array.from(files).filter((file) => acceptedFormats.includes(file.type));

              // Ensure only up to 5 files are processed
              for (let i = 0; i < Math.min(files.length, maxFilesAllowed); i++) {
                let reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onload = () => {
                  let base64String = reader.result;
                  newall_images.push(base64String);

                  // Update state with the new all_images array
                  setUdata((prevData) => ({
                    ...prevData,
                    all_images: newall_images,
                  }));
                };
              }
            }}
            multiple
            accept=".jpg,.jpg,.png,image/jpeg,image/jpg,image/png"
          />
        </label>

        <div className="d-flex mx-0  position-absolute end-0 ms-2" style={{ zIndex: "99", bottom: "10px", maxHeight: "200px", overflowX: "auto" }}>
          {udata.all_images.map((ini, i) => {
            return (
              <div className="me-2 position-relative d-flex align-items-end" key={i} style={{ height: "90px", width: "90px" }}>
                <img src={ini} style={{ height: "80px", width: "80px", objectFit: "cover" }} />

                <button
                  className="position-absolute  end-0 top-0 mt-1 bg-dark btn-sm btn btn-dark rounded-circle  fw-bold"
                  style={{ marginTop: "-5px", zIndex: "999" }}
                  type="button"
                  onClick={() => {
                    const newImages = udata.all_images.filter((_, j) => j !== i);
                    setUdata({ ...udata, all_images: newImages });
                  }}
                >
                  <i className="fa fa-times"></i>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {!props.islogged && (
        <div class="mb-4">
          <label for="exampleInputEmail1" class="form-label">
            Enter your email address to receive an update
          </label>
          <input
            type="email"
            onChange={(e) => {
              setUdata({ ...udata, email: e.target.value });
            }}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{ borderRadius: "10px" }}
            required
            placeholder="Enter your email"
          />
        </div>
      )}

      <div className="w-100 text-end">
        <button type="submit" class="btn btn-dark" disabled={!isValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormSuggestion;
