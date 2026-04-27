// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { ProductContext } from "../context/ProductContext.jsx";

// const ProductCard = ({ product }) => {
//   const { deleteProduct } = useContext(ProductContext);

//   return (
//     <div className="border rounded-xl p-4 shadow hover:shadow-lg transition hover:scale-105">
//       <img
//         src={product.thumbnail}
//         alt={product.title}
//         className="w-full h-40 object-cover rounded"
//       />

//       <h3 className="mt-3 font-semibold text-lg line-clamp-1">
//         {product.title}
//       </h3>

//       <p className="text-green-600 font-bold text-lg">
//         ${product.price}
//       </p>

//       <div className="flex justify-between mt-4">
//         <Link
//           to={`/product/${product.id}`}
//           className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
//         >
//           View
//         </Link>

//         <Link
//           to={`/edit/${product.id}`}
//           className="bg-yellow-500 text-white px-2 py-1 rounded text-sm"
//         >
//           Edit
//         </Link>

//         <button
//           onClick={() => {
//             if (window.confirm("Delete this product?")) {
//               deleteProduct(product.id);
//             }
//           }}
//           className="bg-red-500 text-white px-2 py-1 rounded text-sm"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;