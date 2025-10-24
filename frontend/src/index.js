import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Welcome to Marqa Souq Demo</h1>
      <p className="mb-8">This is a placeholder homepage for your e-commerce frontend.</p>
      <a href="http://localhost:7001" className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700">Go to Admin Dashboard</a>
    </div>
  );
}
