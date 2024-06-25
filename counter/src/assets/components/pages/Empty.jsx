import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createfnd } from "../app/features/counter/CounterSlice";

const Empty = () => {
  let dispatch = useDispatch();

  let [state, setState] = useState({
    id: Math.random(),
    name: "",
    age: "",
    home: "",
    university: "",
  });

  let handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createfnd(state));
  };

  return (
    <div className="container mx-auto d-flex flex-column justify-content-center align-items-center">
      {/* modal */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Friend
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Form */}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Enter Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                  />

                  <label className="form-label">Enter Age</label>
                  <input
                    name="age"
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                  />

                  <label className="form-label">Enter Home</label>
                  <input
                    name="home"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                  />

                  <label className="form-label">Enter University</label>
                  <input
                    name="university"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                  />
                </div>

                <button
                  data-bs-dismiss="modal"
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>

              {/* Form */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}

      <img
        style={{ width: "800px", height: "600px", marginTop: "50px" }}
        src="public\IMG\559-5599326_take-out-the-trash-clipart-removebg-preview.png"
        alt="Image not found"
      />

      <button
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Friend
      </button>
    </div>
  );
};

export default Empty;
