import React from "react";
import logo from "./assets/logo.png";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8" />
          <span className="text-xl font-bold text-green-600">Oxy</span>
          <span className="text-xl font-bold text-blue-600">Pharmacy</span>
        </div>
        <nav className="flex space-x-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="text-green-600 font-semibold">Medicines</a>
          <a href="#" className="hover:text-blue-600">Orders</a>
          <a href="#" className="hover:text-blue-600">Contact Us</a>
          <div className="rounded-full bg-blue-200 h-8 w-8 flex items-center justify-center">
            <span className="text-white font-bold">👤</span>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center bg-white shadow-md mt-20 p-10 rounded-xl relative">
        <div className="text-6xl mb-4">👍</div>
        <h2 className="text-2xl font-bold text-center">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">order id <span className="font-semibold">#A001</span></p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">View order</button>
      </main>
    </div>
  );
}
