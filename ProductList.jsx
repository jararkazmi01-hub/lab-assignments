import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Fetch all products when component mounts
  useEffect(() => {
    fetch("http://localhost:5000/products")   // ✅ Backend API URL
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map(p => (
        <div key={p._id}>
          <p><b>ID:</b>{p._id}</p>
          
          <p style={{color:"green" , fontSize:"20px"}}><b>Name:</b>{p.name}</p>
          <p style={{color:"green" , fontSize:"20px"}}><b>Price:</b>PKR {p.price}</p>
          <p style={{color:"green" , fontSize:"20px"}}><b>Description:</b> {p.description}</p>
          <hr></hr>
           
        </div>
      ))}
    </div>
  );
};

export default ProductList;