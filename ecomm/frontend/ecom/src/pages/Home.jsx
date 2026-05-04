import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
  <div className="min-h-screen bg-gray-50 p-6">
    <h1 className="text-3xl font-bold mb-6">Products</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(p => (
        <div
          key={p._id}
          className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 flex flex-col"
        >
          <div className="h-40 bg-gray-200 rounded mb-3"></div>

          <h2 className="font-semibold text-lg">{p.name}</h2>
          <p className="text-gray-600">${p.price}</p>

          <button
            onClick={() => addToCart(p)}
            className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 rounded mt-4"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
);
  // return (
  //   <div>
  //     <h1>Products</h1>

  //     {products.length === 0 ? (
  //       <p>No products yet</p>
  //     ) : (
  //       products.map(p => (
  //         <div key={p._id} style={{border: "1px solid gray", margin: "10px", padding: "10px"}}>
  //           <h3>{p.name}</h3>
  //           <p>${p.price}</p>
  //           <p>{p.description}</p>
  //           <button onClick={() => addToCart(p)}>Add to Cart</button>
  //         </div>
  //       ))
  //     )}
  //   </div>
  // );
}

export default Home;