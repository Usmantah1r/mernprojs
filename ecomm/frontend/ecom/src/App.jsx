import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import MyOrders from "./pages/MyOrders";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <BrowserRouter>
  <Navbar />
    {/* <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/cart">Cart</Link>|
        <Link to="/my-orders">MyOrders</Link>
        <Link to="/checkout">Checkout</Link>|
        <Link to="/login">login</Link>|
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/AddProduct" element={<AddProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;