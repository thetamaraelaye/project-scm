import React, { useState, useCallback, useMemo } from "react";
import SearchComponent from "../../../component/Search";
import { debounce } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SupplierTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const supplierList = [
        {
          "id": 1,
          "user_id": 101,
          "company_name": "ABC Supplies",
          "supplier_name": "John Doe",
          "status": "active",
          "business_registration_id": "ABC123456",
          "x_url": null,
          "instagram_url": "https://instagram.com/abc_supplies",
          "facebook_url": "https://facebook.com/abc_supplies",
          "estimate_inventory_capability": 5000,
          "number_of_clients": 100,
          "business_email": "info@abc.com",
          "dial_code": "+1",
          "business_phone_number": "123-456-7890",
          "created_at": "2024-05-10T08:00:00Z",
          "updated_at": "2024-05-10T08:00:00Z"
        },
        {
          "id": 2,
          "user_id": 103,
          "company_name": "XYZ Enterprises",
          "supplier_name": "Jane Smith",
          "status": "active",
          "business_registration_id": "XYZ654321",
          "x_url": "https://x.xyz.com",
          "instagram_url": null,
          "facebook_url": "https://facebook.com/xyz_enterprises",
          "estimate_inventory_capability": 8000,
          "number_of_clients": 150,
          "business_email": "sales@xyz.com",
          "dial_code": "+1",
          "business_phone_number": "123-456-7890",
          "created_at": "2024-05-10T08:00:00Z",
          "updated_at": "2024-05-10T08:00:00Z"
        },
        {
            "id": 3,
            "user_id": 104,
            "company_name": "K Tech",
            "supplier_name": "Folusho Oyedapo",
            "status": "active",
            "business_registration_id": "XYZ667891",
            "x_url": "https://ktech.xyz.com",
            "instagram_url": null,
            "facebook_url": "https://facebook.com/ktech_enterprises",
            "estimate_inventory_capability": 500,
            "number_of_clients": 50,
            "business_email": "ktechsales@xyz.com",
            "dial_code": "+1",
            "business_phone_number": "123-456-7890",
            "created_at": "2024-05-10T08:00:00Z",
            "updated_at": "2024-05-10T08:00:00Z"
          },
          {
            "id": 4,
            "user_id": 104,
            "company_name": "Veshe Tech",
            "supplier_name": "Steve O.",
            "status": "approved",
            "business_registration_id": "-",
            "x_url": "https://veshetech.xyz.com",
            "instagram_url": null,
            "facebook_url": "https://facebook.com/veshe_tech",
            "estimate_inventory_capability": 3000,
            "number_of_clients": 150,
            "business_email": "veshetech@xyz.com",
            "dial_code": "+1",
            "business_phone_number": "123-456-7890",
            "created_at": "2024-05-10T08:00:00Z",
            "updated_at": "2024-05-10T08:00:00Z"
          },
          {
            "id": 5,
            "user_id": 105,
            "company_name": "Harmony Digital",
            "supplier_name": "Harmony Sunday",
            "status": "active",
            "business_registration_id": "XYH456789",
            "x_url": "https://harmony_digital.xyz.com",
            "instagram_url": null,
            "facebook_url": "https://facebook.com/harmony_digital",
            "estimate_inventory_capability": 500,
            "number_of_clients": 45,
            "business_email": "harmonydigital@xyz.com",
            "dial_code": "+1",
            "business_phone_number": "123-456-7890",
            "created_at": "2024-05-10T08:00:00Z",
            "updated_at": "2024-05-10T08:00:00Z"
          }
    // More suppliers...
  ]

  

  const handleSearch = useMemo(
    () =>
      debounce((val: string) => {
        console.log(val);
      }, 750),
    []
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let val = e.target.value;
      setSearchValue(val);
      handleSearch(val);
    },
    [handleSearch]
  );

  const supplierStatus = [
    {
      id: 1,
      title: "All",
      tag: "all",
    },
    {
      id: 2,
      title: "Approved",
      tag: "approvd",
    },
    {
      id: 3,
      title: "Pending",
      tag: "pending",
    },
    {
      id: 4,
      title: "Unapproved",
      tag: "unapproved",
    },
  ];

  //add tags to employee directory page
  const [typeID, setTypeID] = useState(1);

  const toggleType = (id: number, tag: string) => {
    setTypeID(id);
    switch (id) {
      case 1:
        setTypeID(1);
        break;
      case 2:
        setTypeID(2);
        break;
      case 3:
        setTypeID(3);
        break;
      case 4:
        setTypeID(4);
        break;
      default:
        setTypeID(1);
        break;
    }
  };

  //navigate to more detailed page pf supplier 
   const handleSupplierPage = (id: number) => {
    console.log(id)
    navigate(`/admin/supplier/${id}`);
   }

  return (
    <>
      <div className="flex  flex-row justify-between">
        <ul className="flex flex-row mt-5 gap-5 items-center">
          {supplierStatus.map((item: any) => (
            <li
              key={item.id}
              onClick={() => toggleType(item.id, item.tag)}
              className={
                typeID === item.id
                  ? "flex gap-1 items-center border-b-2 border-primary pb-1 cursor-pointer"
                  : "flex gap-2 items-center pb-1 cursor-pointer"
              }
            >
              <p
                className={
                  typeID === item.id
                    ? "text-primary text-sm font-semibold"
                    : "text-[#96A397] text-sm font-semibold"
                }
              >
                {item.title}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-3 justify-end">
          {/* <button className="bg-white border border-primary text-primary px-4 py-2 rounded-lg ">Approve</button> */}
          <button className="bg-primary text-white px-4 py-2 rounded-lg ">
            Add Supplier
          </button>
        </div>
      </div>
      {/* table */}
      <div className="">
      <div className="overflow-x-auto relative">
                    <table className="w-full text-justify">
                        <thead className="text-primary text-sm border-b-[#F7F7F7] border-b-2">
                            <tr>
                                <th scope="col" className="px-4 py-4 font-semibold ">
                                    S/N
                                </th>
                                <th scope="col" className="px-4 py-4 font-semibold">
                                  Supplier Name  
                                </th>
                                <th scope="col" className="px-4 py-4 font-semibold">
                                   Company Name
                                </th>
                                <th scope="col" className="px-4 py-4 font-semibold">
                                    Business ID
                                </th>
                                <th scope="col" className="px-4 py-4 font-semibold">
                                    Business Email
                                </th>
                                <th scope="col" className="px-4 py-4 font-semibold">
                                    Clientele Base
                                </th>
                                <th scope="col" className="px-4 py-4 font-semibold">
                                   Est. Inventory Capability
                                </th>
                                {typeID === 3 || typeID === 4? <th scope="col" className="px-4 py-4 font-semibold">
                                   Action
                                </th>: "" }
                            </tr>
                        </thead>
                        {!loading && (
                            <tbody>
                                {supplierList.length > 0 && (
                                    supplierList.map((item) => (
                                <tr
                                    className="bg-white text-sm cursor-pointer hover:bg-[#F3F1F4]"
                                    onClick= {() => handleSupplierPage(item.id)}
                                >
                                    <th
                                        scope="row"
                                        className="py-4 px-4 font-normal text-secondary1 whitespace-nowrap "
                                    >
                                       {item.id}
                                    </th>
                                    <td className="py-4 px-4 text-secondary1">
                                        {item.supplier_name}
                                    </td>
                                    <td className="py-4 px-4 text-secondary1">
                                        {item.company_name}
                                    </td>
                                    <td className="py-4 px-4 text-secondary1">
                                        {item.business_registration_id}
                                    </td>
                                    <td className="py-4 px-4 text-secondary1">
                                        {item.business_email}
                                    </td>
                                    <td className="py-4 px-4 text-secondary1">
                                        {item.number_of_clients}
                                    </td>
                                    <td className="py-4 px-4 text-secondary1">
                                        {item.estimate_inventory_capability}
                                    </td>
                                    {typeID === 3 || typeID === 4? <td className="py-4 px-4 text-secondary1">
                                    <button className="bg-white border border-primary text-primary px-4 py-2 rounded-lg ">Approve</button>
                                    </td> : ""}
                                </tr>
                                ))
                                )
                                }

                            </tbody>
                        )}
                    </table>

                    {loading && (
                        <div className="animate-pulse w-full mt-4 px-4 mb-4">
                            <div className="h-10 bg-gray-200 rounded-lg  w-full mb-2"></div>
                            <div className="h-10 bg-gray-200 rounded-lg  w-full mb-2"></div>
                            <div className="h-10 bg-gray-200 rounded-lg  w-full mb-2"></div>
                            <div className="h-10 bg-gray-200 rounded-lg  w-full mb-2"></div>
                            <div className="h-10 bg-gray-200 rounded-lg  w-full mb-2"></div>
                            <div className="h-10 bg-gray-200 rounded-lg  w-full"></div>
                        </div>
                    )}
                </div>
      </div>
    </>
  );
};

export default SupplierTable;
