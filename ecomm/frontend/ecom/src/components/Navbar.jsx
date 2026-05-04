import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white px-6 py-4 flex justify-between shadow-md">
      <h1 className="text-2xl font-bold tracking-wide">MyStore</h1>

      <div className="space-x-6 text-sm md:text-base">
        <Link className="hover:text-blue-400" to="/">Products</Link>
        <Link className="hover:text-blue-400" to="/cart">Cart</Link>
        <Link className="hover:text-blue-400" to="/my-orders">Orders</Link>
        <Link className="hover:text-blue-400" to="/AddProduct">AddProducts</Link>
        <Link className="hover:text-blue-400" to="/checkout">Checkout</Link>
        <Link className="hover:text-blue-400" to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;