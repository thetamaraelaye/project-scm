import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const InventoryTable = () => {

    const [loading] = useState(false);
    const navigate = useNavigate();

    const InventoryTabs = [
        {
          id: 1,
          title: "All",
          tag: "all",
        },
        {
          id: 2,
          title: "In Stock",
          tag: "in_stock",
        },
        {
          id: 3,
          title: "Out of Stock",
          tag: "out_of_stock",
        },
      ];

      const handleInventoryProd = (val: number) => {
        navigate(`/admin/inventory/${val}`)
    }

    const InventoryList =  [
            {
              "id": 1,
              "quantity_in_stock": 100,
              "location_in_warehouse": "Section A, Shelf 1",
              "supplier_id": 1,
              "status": "in stock",
              "supplier_name": "ABC Supplies",
              "product_name": "HP Elitebook 840 G3",
              "created_at": "2024-05-10T08:00:00Z",
              "updated_at": "2024-05-10T08:00:00Z"
            },
            {
              "id": 2,
              "quantity_in_stock": 75,
              "location_in_warehouse": "Section B, Shelf 2",
              "supplier_id": 2,
              "status": "out of stock",
              "product_name": "Macbook Pro 2023",
              "supplier_name": "XYZ Enterprises",
              "created_at": "2024-05-10T08:00:00Z",
              "updated_at": "2024-05-10T08:00:00Z"
            },
            {
              "id": 3,
              "quantity_in_stock": 200,
              "location_in_warehouse": "Section C, Shelf 3",
              "supplier_id": 3,
              "status": "in stock",
              "product_name": "Dell XPS 13",
              "supplier_name": "K Tech",
              "created_at": "2024-05-10T08:00:00Z",
              "updated_at": "2024-05-10T08:00:00Z"
            },
            {
              "id": 4,
              "quantity_in_stock": 50,
              "product_name": "HP 24-inch Monitor",
              "supplier_name": "veshe Tech",
              "status": "out of stock",
              "location_in_warehouse": "Steve's Box",
              "supplier_id": 4,
              "created_at": "2024-05-10T08:00:00Z",
              "updated_at": "2024-05-10T08:00:00Z"
            },
            {
              "id": 5,
              "quantity_in_stock": 150,
              "product_name": "Iphone 14 Pro Max",
              "supplier_name": "Harmony Digital",
              "status": "in stock",
              "location_in_warehouse": "Section E, Shelf 5",
              "supplier_id": 5,
              "created_at": "2024-05-10T08:00:00Z",
              "updated_at": "2024-05-10T08:00:00Z"
            },
            {
              "id": 6,
              "quantity_in_stock": 80,
              "location_in_warehouse": "Section F, Shelf 6",
              "product_name": "Samsung Galaxy S21",
              "supplier_name": "ABC Supplies",
              "status": "out of stock",
              "supplier_id": 1,
              "created_at": "2024-05-10T08:00:00Z",
              "updated_at": "2024-05-10T08:00:00Z"
            },
            {
              "id": 7,
              "quantity_in_stock": 120,
              "location_in_warehouse": "Section G, Shelf 7",
              "product_name": "Samsung Tab A7",
              "status": "in stock",
              "supplier_name": "XYZ Enterprises",
              "supplier_id": 2,
              "created_at": "2024-05-10T08:00:00Z",
              "updated_at": "2024-05-10T08:00:00Z"
            },
            {
              "id": 8,
              "quantity_in_stock": 90,
              "location_in_warehouse": "Section H, Shelf 8",
              "product_name": "Samsung Tab A7",
              "status": "in stock",
              "supplier_name": "XYZ Enterprises",
              "supplier_id": 2,
              "created_at": "2024-05-10T08:00:00Z",
              "updated_at": "2024-05-10T08:00:00Z"
            },
            {
              "id": 9,
              "quantity_in_stock": 110,
              "product_name": "IPad Pro 2023",
              "supplier_name": "veshe Tech",
              "status": "in stock",
              "location_in_warehouse": "Steve's Box",
              "supplier_id": 5,
              "created_at": "2024-05-10T08:00:00Z",
              "updated_at": "2024-05-10T08:00:00Z"
            },
            {
              "id": 10,
              "quantity_in_stock": 60,
              "location_in_warehouse": "Section J, Shelf 3",
              "product_name": "Dell XPS 13",
              "status": "in stock",
              "supplier_name": "Harmony Digital",
              "supplier_id": 5,
              "created_at": "2024-05-10T08:00:00Z",
              "updated_at": "2024-05-10T08:00:00Z"
            }
          ]

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
      default:
        setTypeID(1);
        break;
    }
  };


    

    return (
        <>
              <div className="flex  flex-row justify-between">
        <ul className="flex flex-row mt-5 gap-5 items-center">
          {InventoryTabs.map((item: any) => (
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
        {/* <div className="flex flex-row gap-3 justify-end">
          {/* <button className="bg-white border border-primary text-primary px-4 py-2 rounded-lg ">Approve</button> *
          <button className="bg-primary text-white px-4 py-2 rounded-lg ">
            Add Supplier
          </button>
        </div> */}
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
                                 Product Name
                                </th>
                                <th scope="col" className="px-4 py-4 font-semibold">
                                   Supplier Name
                                </th>
                                <th scope="col" className="px-4 py-4 font-semibold">
                                    Quantity in Stock
                                </th>
                                <th scope="col" className="px-4 py-4 font-semibold">
                                    Location
                                </th>
                                <th scope="col" className="px-4 py-4 font-semibold">
                                    Satus
                                </th>
                            </tr>
                        </thead>
                        {!loading && (
                            <tbody>
                                {InventoryList.length > 0 && (
                                    InventoryList.map((item) => (
                                <tr
                                    className="bg-white text-sm cursor-pointer hover:bg-[#F3F1F4]"
                                    onClick= {() => handleInventoryProd(item.id)}
                                >
                                    <th
                                        scope="row"
                                        className="py-4 px-4 font-normal text-secondary1 whitespace-nowrap "
                                    >
                                       {item.id}
                                    </th>
                                    <td className="py-4 px-4 text-secondary1">
                                        {item.product_name}
                                    </td>
                                    <td className="py-4 px-4 text-secondary1">
                                        {item.supplier_name}
                                    </td>
                                    <td className="py-4 px-4 text-secondary1">
                                        {item.quantity_in_stock}
                                    </td>
                                    <td className="py-4 px-4 text-secondary1">
                                        {item.location_in_warehouse}
                                    </td>
                                    <td className="py-4 px-4 text-secondary1">
                                        {item.status}
                                    </td>
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
    )
}

export default InventoryTable;