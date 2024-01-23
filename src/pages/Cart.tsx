import axios from "axios";
import { useEffect } from "react";

export default function Cart() {
  const cartItem = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/cart/54c44fa8-feb2-4ea0-92a5-1acd05aa3b5a`
      );
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
