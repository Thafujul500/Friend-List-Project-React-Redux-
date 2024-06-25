import React from "react";
import { useSelector } from "react-redux";
import Home from "./Home";
import Empty from "./Empty";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = () => {
  let myFriend = useSelector((state) => state.nameReducers.names);
  return (
    <div className="container">
      {myFriend.length > 0 ? <Home /> : <Empty />}
    </div>
  );
};

export default Index;
