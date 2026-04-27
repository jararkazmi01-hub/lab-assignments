import React, { useState } from "react";

const AddProduct = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price: Number(price) })
    })
      .then(res => res.json())
      .then(data => {
        onAdd(data);  // update state in parent
        setName("");
        setPrice("");
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" type="number" />
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
};

export default AddProduct;