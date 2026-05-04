import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

function Checkout() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  
  const placeOrder = async () => {
  try {
    
    const { data } = await axios.post("http://localhost:5000/api/orders", {
  orderItems: cart,
  totalPrice: total
}, {
  headers: {
    Authorization: user.token
  }
});
    alert("Order saved!");
    console.log(data);
    console.log(user);
    
  } catch (error) {
    console.log(error);
  }
  
};

  return (
    // <div>
    //   <h1>Checkout</h1>

    //   {cart.map(item => (
    //     <div key={item._id}>
    //       {item.name} - {item.qty} x ${item.price}
    //     </div>
    //   ))}

    //   <h2>Total: ${total}</h2>

    //   <button onClick={placeOrder}>
    //     Place Order
    //   </button>
    // </div>
    <div className="p-8 bg-gray-50 min-h-screen">
  <h1 className="text-3xl font-bold mb-6">Checkout</h1>

  <div className="bg-white p-6 rounded-lg shadow">
    {cart.map(item => (
      <div key={item._id} className="flex justify-between py-2 border-b">
        <span>{item.name} x {item.qty} - ${item.price}</span>
      </div>
    ))}

    <h2 className="text-xl font-bold mt-4">
      Total: ${total}
    </h2>
    
    <button
      onClick={placeOrder}
      className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
    >
      Place Order
    </button>
  </div>
</div>
  );
}

export default Checkout;