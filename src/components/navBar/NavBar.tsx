import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <div className="font-extrabold text-3xl italic">Shopping App</div>
      <div className="flex gap-5 items-center">
        {token ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/cart">View cart</Link>
            <button type="button" onClick={logoutHandler}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup">sign up</Link>
            <Link to="/login">login</Link>
          </>
        )}
      </div>
    </nav>
  );
};
