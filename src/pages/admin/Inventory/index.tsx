import React from "react";
import InventoryTable from "../../../tables/Admin/Inventory";

const InventoryPage = () => {
  return (
    <>
      <div className="flex flex-row w-full gap-4 px-2 py-2 ">
        <div className="bg-white text-justify gap-4 px-4 py-5 gap-6 rounded-lg w-1/4 border-2 border-[#89D98B]">
          <div className="flex flex-row justify-between">
            <h3 className="font-light text-[#010508] mb-2">Total Product</h3>
          </div>
          <h2 className="text-black mb-2">2500</h2>
          <div className="flex flex-row justify-between gap-3">
            <h3 className="font-light text-[#010508]">Since last week</h3>
            <small className="text-sm text-[#89D98B]">+11.23%</small>
          </div>
        </div>
        <div className="bg-white text-justify gap-4 px-4 py-5 gap-6 rounded-lg  w-1/4 border border-[#0595E3]">
          <div className="flex flex-row justify-between">
            <h3 className="font-light text-[#010508] mb-2">Total Product</h3>
          </div>
          <h2 className="text-black mb-2">2500</h2>
          <div className="flex flex-row justify-between gap-3">
            <h3 className="font-light text-[#010508]">Since last week</h3>
            <small className="text-sm text-[#89D98B]">+11.23%</small>
          </div>
        </div>

        <div className="bg-white text-justify gap-4 px-4 py-5 gap-6 rounded-lg w-1/4 border border-[#C21902]">
          <div className="flex flex-row justify-between">
            <h3 className="font-light text-[#010508] mb-2">Total Product</h3>
          </div>
          <h2 className="text-black mb-2">2500</h2>
          <div className="flex flex-row justify-between gap-3">
            <h3 className="font-light text-[#010508]">Since last week</h3>
            <small className="text-sm text-[#89D98B]">+11.23%</small>
          </div>
        </div>
        <div className="bg-white text-justify gap-4 px-4 py-5 gap-6 rounded-lg w-1/4 border border-[#FDE048]">
          <div className="flex flex-row justify-between">
            <h3 className="font-light text-[#010508] mb-2">Total Product</h3>
          </div>
          <h2 className="text-black mb-2">2500</h2>
          <div className="flex flex-row justify-between gap-3">
            <h3 className="font-light text-[#010508]">Since last week</h3>
            <small className="text-sm text-[#89D98B]">+11.23%</small>
          </div>
        </div>
      </div>
      {/* Table */}
      <InventoryTable />
    </>
  );
};

export default InventoryPage;
