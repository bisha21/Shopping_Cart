import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/cart";
import Navbar from "./Component/Navbar";

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/carts" element={<Cart/>} />
    </Routes>
    </>
  )
}