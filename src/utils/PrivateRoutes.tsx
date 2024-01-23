import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes() {
  const token = localStorage.getItem("token");
  const auth = token ? true : false;
  return auth ? <Outlet /> : <Navigate to="/login" />;
}
