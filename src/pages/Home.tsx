import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const populateHome = async () => {
    try {
      const response = await axios.get("http://localhost:3001/product/all", {
        headers: {
          "access-token": localStorage.getItem("token"),
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      populateHome();
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <button type="button" onClick={logoutHandler}>
        logout
      </button>
    </div>
  );
};
