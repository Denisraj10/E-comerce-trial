import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const OrderModal = ({ product, onClose }) => {
  const [address, setAddress] = useState("");
const handleOrder = async () => {
  if (!address) {
    alert("Please enter your address!");
    return;
  }

  const userEmail = localStorage.getItem("userEmail");  // 🔥 Check if user email is stored
  if (!userEmail) {
    alert("You must be logged in to place an order!");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "orders"), {
      productName: product.title,
      productImage: product.image,
      price: product.price,
      address: address,
      userEmail: userEmail, // 🔥 Save user email
      timestamp: serverTimestamp(),
    });

    console.log("Order ID:", docRef.id); // ✅ Debugging
    alert("Your order is confirmed! ✅");

    onClose(); // Close the form after ordering
  } catch (error) {
    console.error("Error placing order:", error);
    alert("Failed to place order! ❌ Check console for details.");
  }
};
}
