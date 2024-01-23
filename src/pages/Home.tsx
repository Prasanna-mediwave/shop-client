import { useEffect, useState } from "react";
import axios from "axios";
import { ShopCard } from "../components/shoppingCard/ShopCard";

export const Home = () => {
  const [userData, setUserData] = useState([]);
  const populateHome = async () => {
    try {
      const response = await axios.get("http://localhost:3001/product/all", {
        headers: {
          "access-token": localStorage.getItem("token"),
        },
      });
      setUserData(response.data);
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

  return (
    <>
      <div className="bg-primary w-full px-40 py-10">
        <ShopCard userData={userData} />
      </div>
    </>
  );
};
