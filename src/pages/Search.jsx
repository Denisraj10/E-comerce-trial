import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  // 🔹 Filter products based on search input
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Search Products</h1>

      {/* 🔹 Search Input */}
      <input
        type="text"
        placeholder="Search for a product..."
        className="w-full p-3 mb-6 border rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 🔹 Display Filtered Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover mb-2"/>
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-700">${product.price}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
