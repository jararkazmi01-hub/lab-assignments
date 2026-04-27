import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext.jsx";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams(); // get :id from route

  // Find product by ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow">
      <img src={product.thumbnail} alt={product.title} className="w-full rounded" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-green-600 font-bold text-xl mt-3">${product.price}</p>
    </div>
  );
};

export default ProductDetails;