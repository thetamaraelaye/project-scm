import Header from "../../component/Header"
const OverviewPage = () => {
  return (
    <>
      <Header text="Overview"></Header>
      <div className="bg-[#EBE9FE] px- py-4">
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


      </div>
    </>
  );
};

export default OverviewPage;
