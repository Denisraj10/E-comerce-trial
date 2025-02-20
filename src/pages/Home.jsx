import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to 
        <span className="text-red-400"> {""}Kolass & Co</span>
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            {/* Display Product Image */}
            <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover mb-2 bg-slate-300"/>
            
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
            <button className="mt-2 bg-blue-900 text-white px-4 py-2 rounded">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
