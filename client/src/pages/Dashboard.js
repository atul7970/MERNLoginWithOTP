import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/mix.css";
const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid");
    } else {
      navigate("*");
    }
  };

  useEffect(() => {
    userValid();
  });
  return <span>Dashboard {location.state}</span>;
};

export default Dashboard;
