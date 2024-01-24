import { useEffect, useState } from "react";
import { ShopCard } from "../components/shoppingCard/ShopCard";
import axios from "../services/apiService";
export const Home = () => {
  const [userData, setUserData] = useState([]);
  const populateHome = async () => {
    try {
      const response = await axios.get("/product/all");
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
