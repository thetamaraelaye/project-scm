import React, { useState } from "react";

interface SalesData {
  totalOrders: number;
  newOrders: number;
  totalSales: number;
  totalIncome: number;
}

const salesData: SalesData = {
  totalOrders: 123,
  newOrders: 45,
  totalSales: 15000,
  totalIncome: 10000,
};

const SalesOverview = () => {
  const [filter, setFilter] = useState<string>("weekly"); // Default filter

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Sales Overview</h2>

      <div className="flex justify-between mb-4">
        <button
          className={`text-white py-2 px-4 rounded-md focus:outline-none ${
            filter === "weekly" ? "bg-blue-500" : "bg-gray-400"
          }`}
          onClick={() => handleFilterChange("weekly")}
        >
          Weekly
        </button>
        <button
          className={`text-white py-2 px-4 rounded-md focus:outline-none ${
            filter === "monthly" ? "bg-blue-500" : "bg-gray-400"
          }`}
          onClick={() => handleFilterChange("monthly")}
        >
          Monthly
        </button>
        <button
          className={`text-white py-2 px-4 rounded-md focus:outline-none ${
            filter === "daily" ? "bg-blue-500" : "bg-gray-400"
          }`}
          onClick={() => handleFilterChange("daily")}
        >
          Daily
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-medium mb-2">Total Orders</h3>
          <p className="text-xl font-bold">{salesData.totalOrders}</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-medium mb-2">New Orders</h3>
          <p className="text-xl font-bold">{salesData.newOrders}</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-medium mb-2">Total Sales</h3>
          <p className="text-xl font-bold">
            ₦{salesData.totalSales.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-medium mb-2">Total Income</h3>
          <p className="text-xl font-bold">
            ₦{salesData.totalIncome.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
