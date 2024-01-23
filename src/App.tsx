import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import { Home } from "./pages/Home";
import PrivateRoutes from "./utils/PrivateRoutes";
import { NavBar } from "./components/navBar/NavBar";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
