import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const navigate = useNavigate();

  return (
    // <div>
    //   <h1>Cart</h1>

    //   {cart.length === 0 ? (
    //     <p>Cart is empty</p>
    //   ) : (
    //     cart.map((item) => (
    //       <div key={item._id}>

    //         <h3>{item.name}</h3>
    //         <p>${item.price}</p>

    //         <button onClick={() => decreaseQty(item._id)}>-</button>
    //         <span>{item.qty}</span>
    //         <button onClick={() => increaseQty(item._id)}>+</button>
    //         <button onClick={() => removeFromCart(item._id)}>Remove</button>

    //       </div>
    //     ))
    //   )}
    //         <h2>Total: ${total}</h2>
    //
    // </div>
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item._id)}
                className="px-2 bg-gray-200 rounded"
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => increaseQty(item._id)}
                className="px-2 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item._id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold mt-4">Total: ${total}</h2>
      <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
