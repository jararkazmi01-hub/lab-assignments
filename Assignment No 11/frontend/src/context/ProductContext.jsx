import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const BASE_URL = "http://localhost:5000/products";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch Products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(BASE_URL);
      setProducts(res.data); // ✅ FIXED
    } catch (err) {
      setError("Error fetching products");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add Product
  const addProduct = async (product) => {
    try {
      const res = await axios.post(BASE_URL, product); // ✅ FIXED
      setProducts([...products, res.data]);
    } catch (err) {
      setError(err.response?.data?.message || "Error adding product");
    }
  };

  // Update Product
  const updateProduct = async (id, updatedData) => {
    try {
      const res = await axios.put(`${BASE_URL}/${id}`, updatedData);
      setProducts(products.map(p => p._id === id ? res.data : p)); // ✅ FIXED
    } catch (err) {
      setError(err.response?.data?.message || "Error updating product");
    }
  };

  // Delete Product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setProducts(products.filter(p => p._id !== id)); // ✅ FIXED
    } catch (err) {
      setError(err.response?.data?.message || "Error deleting product");
    }
  };

  // Search Filter
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) // ✅ FIXED
  );

  return (
    <ProductContext.Provider value={{
      products: filteredProducts,
      loading,
      error,
      clearError: () => setError(null),
      searchTerm,
      setSearchTerm,
      addProduct,
      updateProduct,
      deleteProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
};