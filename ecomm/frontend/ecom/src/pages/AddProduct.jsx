import { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submit = async () => {
    await axios.post("http://localhost:5000/api/products", {
      name,
      price,
      description
    });

    alert("Product added");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col">
      <h1>Add Product</h1>

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <input placeholder="Description" onChange={e => setDescription(e.target.value)} />

      <button className="transition-transform hover:scale-105" onClick={submit}>Add</button>
    </div>
  );
}

export default AddProduct;