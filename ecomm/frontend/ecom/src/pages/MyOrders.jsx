import { useEffect, useState } from "react";
import axios from "axios";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     const user = JSON.parse(localStorage.getItem("user"));
  //     if (!user || !user.token) {
  //     console.log("No user token found");
  //     return;
  //   }

  //     const { data } = await axios.get("http://localhost:5000/api/orders/my", {
  //       headers: {
  //         Authorization: "Bearer " + user.token
  //       }
  //     });

  //     setOrders(data);
  //   };

  //   fetchOrders();
  // }, []);
  useEffect(() => {
  const fetchOrders = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      console.log("USER:", user); // DEBUG

      const { data } = await axios.get(
        "http://localhost:5000/api/orders/my",
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );

      setOrders(data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  fetchOrders();
}, []);

  return (
    <div>
      <h1>My Orders</h1>

      {orders.map(order => (
        <div key={order._id}>
          <h3>Total: ${order.totalPrice}</h3>
          <p>Items: {order.orderItems.length}</p>
        </div>
      ))}
    </div>
  );
}

export default MyOrders;