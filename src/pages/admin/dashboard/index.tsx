import SalesOverview from "../../../component/Card/salesOverview";
import Header from "../../../component/Header";

const DashboardPage = () => {
  return (
    <>
      <Header text="Dashboard"></Header>
      <div className="bg-[#EBE9FE] px-11 py-4 mb-[5%]">
        <div className="flex flex-row bg-white w-full">
          <div className="bg-[#8136cb] flex flex-row  text-[#F2F5F7] w-[55%] rounded-xl px-4 py-3">
            <div className="flex flex-col">
              <div className="w-[30%] px-4 flex flex-col">
                <p className="font-bold text-3xl">12</p>
                <p className="text-xs font-normal">Pending Deliveries</p>
              </div>
            </div>
            <div className="border-r border-l  flex flex-col border-white w-[30%] px-4">
              <div></div>
              <strong className="font-bold text-3xl">120</strong>
              <p className="text-xs font-normal">Active Orders</p>
            </div>
            <div className="w-[40%] px-4">
              <strong className="pb-2 font-bold text-3xl">1,240</strong>
              <p className="text-xs font-normal">Completed Orders</p>
            </div>
          </div>
          <div className="bg-[#F2F5F7] pt-4 px-4 flex flex-row text-[#02324C] w-[45%]">
            <div>
              <div className="border-r flex flex-col border-[#CCCCCC]  px-4">
                <strong className="font-bold text-3xl">3,617</strong>
                <p className="text-xs font-normal">Stock in Hand</p>
              </div>
            </div>
            <div className=" flex flex-col px-4">
              <strong className=" font-bold text-3xl">69</strong>
              <p className="text-xs font-normal">Stock in Transit</p>
            </div>
          </div>
        </div>
        <SalesOverview />
        <div className="flex flex-row px-2 gap-5">
          <div className="bg-white flex flex-col px-4 py-5 w-1/2 rounded-lg">
            <h3>Best Selling Product</h3>
            <table className="w-full">
              <thead className="text-primary text-sm border-b-[#F7F7F7] border-b-2">
                <tr>
                  <th scope="col" className="px-4 py-4 font-semibold " >
                    Item
                  </th>
                  <th scope="col" className="px-4 py-4 font-semibold ">
                    Supplier
                  </th>
                  <th scope="col" className="px-4 py-4 font-semibold ">
                    Quantity Sold
                  </th>
                  <th scope="col" className="px-4 py-4 font-semibold ">
                    Amount
                  </th>
                  <th scope="col" className="px-4 py-4 font-semibold ">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-sm cursor-pointer hover:bg-[#F3F1F4]"
                    
                >
                  <td>Acer A15</td>
                  <td>K-tech</td>
                  <td>43</td>
                  <td>NGN500,000</td>
                  <td>Laptop</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white rounded-lg w-1/2">
           
            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
