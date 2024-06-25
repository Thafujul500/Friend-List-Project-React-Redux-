import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createfnd,
  deleteFnd,
  updateFndRed,
} from "../app/features/counter/CounterSlice";

const Home = () => {
  let value = useSelector((state) => state.nameReducers.names);
  let dispatch = useDispatch();

  //   create section

  let [newFnd, setNewFnd] = useState({
    id: Math.random(),
    name: "",
    age: "",
    home: "",
    university: "",
  });

  let handleCreateSubmit = (e) => {
    e.preventDefault();
    dispatch(createfnd(newFnd));
    e.target.reset();
  };

  let handleNewChange = (e) => {
    setNewFnd({ ...newFnd, [e.target.name]: e.target.value });
  };

  // create section

  // delete section

  let handleDelete = (item) => {
    console.log(item);
    dispatch(deleteFnd(item));
  };

  // delete section
  // update section

  let [updateFnd, setUpdateFnd] = useState([]);
  // let {name,age,home,university} = updateFnd;

  let updateClick = (item) => {
    console.log(item);
    setUpdateFnd(item);
    console.log(updateFnd);
  };

  let handleEditClick = (e) => {
    setUpdateFnd({ ...updateFnd, [e.target.name]: e.target.value });
  };

  let handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updateFndRed(updateFnd));
  };

  // update section

  return (
    <div className="container">
      <h1 className="text-center mt-3">Friend Name List</h1>

      {/* Add Fnd Modal */}

      <button
        type="button"
        className="btn btn-info btn-lg m-auto mb-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Friend
      </button>

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

              <form onSubmit={handleCreateSubmit}>
                <div className="mb-3">
                  <label className="form-label">Enter Name</label>
                  <input
                    name="name"
                    onChange={handleNewChange}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />

                  <label className="form-label">Enter Age</label>
                  <input
                    name="age"
                    onChange={handleNewChange}
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />

                  <label className="form-label">Enter Home</label>
                  <input
                    name="home"
                    onChange={handleNewChange}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />

                  <label className="form-label">Enter University</label>
                  <input
                    name="university"
                    onChange={handleNewChange}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
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

      {/* Add Fnd Modal */}

      {/* Edit Fnd Modal */}

      <div
        className="modal fade"
        id="editFnd"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Friend Information
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

              <form onSubmit={handleEditSubmit}>
                <div className="mb-3">
                  <label className="form-label">Edit Name</label>
                  <input
                    name="name"
                    value={updateFnd.name}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleEditClick}
                  />

                  <label className="form-label">Edit Age</label>
                  <input
                    name="age"
                    value={updateFnd.age}
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleEditClick}
                  />

                  <label className="form-label">Edit Home</label>
                  <input
                    name="home"
                    value={updateFnd.home}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleEditClick}
                  />

                  <label className="form-label">Edit University</label>
                  <input
                    name="university"
                    value={updateFnd.university}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleEditClick}
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

      {/* Edit Fnd Modal */}

      <table className="table table-success table-stripe text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Home</th>
            <th scope="col">University</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {value &&
            value.map((fnd) => {
              let { id, name, age, home, university } = fnd;
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{home}</td>
                  <td>{university}</td>
                  <td>
                    <button
                      onClick={() => {
                        updateClick(fnd);
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#editFnd"
                      className="btn btn-danger fw-bold"
                    >
                      Edit Friend
                    </button>

                    <button
                      onClick={() => {
                        handleDelete(fnd);
                      }}
                      className="btn ms-3 text-white btn-warning fw-bold"
                    >
                      Delte Friend
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
