import React from "react";
import { useNavigate } from "react-router";
import "./Choose.css";
const Choose = () => {
  const navigate = useNavigate();
  const Client = () => {
    navigate("/client_home");
  };
  return (
    <div class="option">
      <div class="first">
        <button onClick={Client}>As a Client</button>
      </div>
      <div class="second">
        <button>As a Lawyer</button>
      </div>
    </div>
  );
};

export default Choose;
