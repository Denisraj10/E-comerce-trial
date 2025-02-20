import React, { useState } from "react";
import OrderModal from "./OrderModal";  // ✅ Correct file name

const ProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow-lg">
          <img src={product.image} alt={product.title} className="w-full h-32 object-cover mb-3" />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
            onClick={() => {
              console.log("Opening Order Form for:", product); // 🔥 Debugging log
              setSelectedProduct(product);
            }}
          >
            Buy Now
          </button>
        </div>
      ))}

      {selectedProduct && (
        <OrderModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default ProductList;
