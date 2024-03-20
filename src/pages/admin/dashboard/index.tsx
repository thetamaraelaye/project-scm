import Header from "../../../component/Header";

const DashboardPage = () => {

return(
    <>
        <Header text="Dashboard">
        </Header>
        <div className="bg-[#F2F5F7] px- py-4">
            <div className="flex flex-row bg-white w-full">
                <div className="bg-[#036397] flex flex-row  text-[#F2F5F7] w-[55%] rounded-xl px-4 py-3">
                    <div className="">
                        <h3>SALES ACTIVITY</h3>
                        <div className="w-[30%] px-4">
                            <p className="font-bold text-3xl">12</p>
                            <p  className="text-xs font-normal">Pending Deliveries</p>
                        </div>
                    </div>
                    <div className="border-r border-l  border-white w-[30%] px-4">
                        <strong className="font-bold text-3xl">120</strong>
                        <p  className="text-xs font-normal">Active Orders</p>
                    </div>
                    <div className="w-[40%] px-4">
                        <strong className="pb-2 font-bold text-3xl">1,240</strong>
                        <p  className="text-xs font-normal">Completed Orders</p>
                    </div>
                </div>
                <div className="bg-[#F2F5F7] flex flex-row text-[#02324C] w-[45%]">
                    <div>
                        <h3>INVENTORY SUMMARY</h3>
                        <div className="border-r  border-[#CCCCCC] w-[21%] px-4">
                            <strong className="font-bold text-3xl">3,617</strong>
                            <p  className="text-xs font-normal">Stock in Hand</p>
                        </div>
                    </div>s
                    <div className="w-[23%] px-4">
                        <strong className="pb-2 font-bold text-3xl">69</strong>
                        <p  className="text-xs font-normal">Stock in Transit</p>
                    </div>
                </div>
            </div>
        </div>
        
       
    </>

)

}

export default DashboardPage;