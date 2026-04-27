import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const EditProduct = () => {
  const { id } = useParams();
  const { updateProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ title: "", price: "" });

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then(res => setForm(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditProduct;