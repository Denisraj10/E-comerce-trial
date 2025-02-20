import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const userEmail = localStorage.getItem("userEmail");
      if (!userEmail) return;

      const q = query(collection(db, "orders"), where("userEmail", "==", userEmail));
      const querySnapshot = await getDocs(q);
      const ordersData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      setOrders(ordersData);
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Your Orders</h1>
      {orders.length === 0 ? (
        <p className="text-gray-600">No orders yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {orders.map((order) => (
            <div key={order.id} className="border p-4 rounded shadow-lg">
              <img src={order.productImage} alt={order.productName} className="w-full h-32 object-cover mb-3" />
              <h2 className="text-lg font-bold">{order.productName}</h2>
              <p className="text-gray-600">${order.price}</p>
              <p className="text-gray-800">Delivered to: {order.address}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
