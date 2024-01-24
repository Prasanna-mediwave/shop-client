import axios from "../services/apiService";
import { useEffect } from "react";

export default function Cart() {
  const cartItem = async () => {
    try {
      const response = await axios.get("/cart");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      cartItem();
    }
  }, []);
  return <div>Cart</div>;
}
