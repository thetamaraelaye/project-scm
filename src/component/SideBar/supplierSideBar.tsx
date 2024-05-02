import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.jpg";
import notification_icon from "../../assets/icons/notification.svg";
import logout_icon from "../../assets/icons/logout.svg";
import product_active from "../../assets/icons/product_new.svg";
import ProductIcon from "../../assets/icons/product.svg";
import { Dashboard } from "@mui/icons-material";
// import DashboardIcon from "../../assets/icons/dashboard_white.svg";
import cashflow_active from "../../assets/icons/cashflow_new.svg";
import CashflowIcon from "../../assets/icons/cashflow.svg";
import inventory_active from "../../assets/icons/inventory_new.svg";
import InventoryIcon from "../../assets/icons/inventory.svg";
// import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import report_active from "../../assets/icons/reports_new.svg";
import ReportIcon from "../../assets/icons/reports.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type sidebarType = {
  children: React.ReactNode;
  title: string;
};

export default function SupplierSidebar({ children, title }: sidebarType) {
  let location = useLocation();
 // const [isDashboardHover] = React.useState(false);
  const [isInventoryHover, setIsInventoryHover] = React.useState(false);
  const [isProductsHover, setIsProductsHover] = React.useState(false);
  const [isReportsHover, setIsReportsHover] = React.useState(false);
  const [isCashflowHover, setIsCashflowHover] = React.useState(false);
  //const [isDocsHover, setIDocsHover] = React.useState(false);

  //const { first_name, last_name } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleLogout = () => {
    // dispatch(logOut());
    navigate("/");
  };

  return (
    <>
      <div className="hidden lg:flex h-screen bg-[#E8EDFF]">
        <div className="md:w-64 bg-[#fff] flex-shrink-0 overflow-y-scroll pt-[30px] sidebar_scroll">
          <div className="mb-3">
            <img
              src={logo}
              alt="logo"
              className="mr-3 w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:h-[30px] lg:w-[30px] ml-5 "
            />
          </div>
          <div className="px-4 cursor-pointer mt-[40px]">
            <section>
              <NavLink
                to="/supplier/dashboard"
                className={
                  location.pathname.includes("/dashboard")
                    ? "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#011E2D] bg-white w-[98%] rounded-r-[8px]"
                    : "px-[20.6px]  flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#010508] hover:text-[white] hover:bg-[#9437f1] w-[98%] rounded-[8px]"
                }
              >
                
                <Dashboard />

                <p className="font-semibold text-sm capitalize leading-[18px]">
                  Dashboard
                </p>
              </NavLink>

              <NavLink
                to="/supplier/inventory"
                onMouseEnter={() => setIsInventoryHover(true)}
                onMouseLeave={() => setIsInventoryHover(false)}
                className={
                  location.pathname.includes("/inventory")
                    ? "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#011E2D] bg-white w-[98%] rounded-r-[8px]"
                    : "px-[20.6px]  flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#010508] hover:text-[white] hover:bg-[#9437f1] w-[98%] rounded-[8px]"
                }
              >
                {location.pathname.includes("/inventory") ||
                isInventoryHover ? (
                  <img src={InventoryIcon} alt="inventory" className="" />
                ) : (
                  <img src={inventory_active} alt="" className="" />
                )}
                <p className="font-semibold text-sm capitalize leading-[18px]">
                  Inventory
                </p>
              </NavLink>

              <NavLink
                to="/supplier/products"
                onMouseEnter={() => setIsProductsHover(true)}
                onMouseLeave={() => setIsProductsHover(false)}
                className={
                  location.pathname.includes("/products")
                    ? "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#011E2D] bg-white w-[98%] rounded-r-[8px]"
                    : "px-[20.6px]  flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#010508] hover:text-[white] hover:bg-[#9437f1] w-[98%] rounded-[8px]"
                }
              >
                {location.pathname.includes("/products") || isProductsHover ? (
                  <img src={ProductIcon} alt="products" className="" />
                ) : (
                  <img src={product_active} alt="products" className="" />
                )}
                <p className="font-semibold text-sm capitalize leading-[18px]">
                  Products
                </p>
              </NavLink>

              <NavLink
                to="/supplier/cashflow"
                onMouseEnter={() => setIsCashflowHover(true)}
                onMouseLeave={() => setIsCashflowHover(false)}
                className={
                  location.pathname.includes("/cashflow")
                    ? "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#011E2D] bg-white w-[98%] rounded-r-[8px]"
                    : "px-[20.6px]  flex gap-[18.5px] items-center  mb-[13px] py-[13px] text-[#010508] hover:text-[white] hover:bg-[#9437f1] w-[98%] rounded-[8px]"
                }
              >
                {location.pathname.includes("/cashflow") || isCashflowHover ? (
                  <img src={CashflowIcon} alt="cashflow" className="" />
                ) : (
                  <img src={cashflow_active} alt="cashflow" className="" />
                )}
                <p className="font-semibold text-sm capitalize leading-[18px]">
                  Cashflow
                </p>
              </NavLink>
              <NavLink
                to="/supplier/orders"
                className={
                  location.pathname.includes("/orders")
                    ? // location.pathname.includes("profiles") ||
                      // location.pathname.includes("edit-profile") ||
                      "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#011E2D] bg-white w-[98%] rounded-r-[8px]"
                    : "px-[20.6px]  flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#010508] hover:text-[white] hover:bg-[#9437f1] w-[98%] rounded-[8px]"
                }
              >
                <ShoppingCartIcon style={{ fontSize: "18px" }} />
                <p className="font-semibold text-sm capitalize leading-[18px]">
                  Orders
                </p>
              </NavLink>

              <NavLink
                to="/supplier/reports/"
                onMouseEnter={() => setIsReportsHover(true)}
                onMouseLeave={() => setIsReportsHover(false)}
                className={
                  location.pathname === "/supplier/reports"
                    ? "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#011E2D] bg-white w-[98%] rounded-r-[8px]"
                    : "px-[20.6px]  flex gap-[18.5px] items-center  mb-[13px] py-[13px] hover:text-[white] hover:bg-[#9437f1] w-[98%] rounded-[8px]"
                }
              >
                {location.pathname.includes("/reports") ||
                // location.pathname.includes("profiles") ||
                // location.pathname.includes("edit-profile") ||
                isReportsHover ? (
                  <img src={ReportIcon} alt="reports" className="" />
                ) : (
                  <img src={report_active} alt="reports" className="" />
                )}
                <p className="font-semibold text-sm capitalize leading-[18px]">
                  Reports
                </p>
              </NavLink>

              <div
                onClick={handleLogout}
                className="mt-[70%] pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#011E2D] bg-white w-[98%] rounded-r-[8px]"
              >
                <img src={logout_icon} alt="logout" className="w-5 h-5" />
                <p className="font-semibold text-sm capitalize leading-[18px] cursor-pointer">
                  {" "}
                  Logout
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className=" flex-grow flex-auto flex-shrink overflow-y-scroll">
          {/* NAV BAR */}

          <div className="bg-[white] flex py-5 px-4 md:px-6 justify-between items-center">
            <div>
              <div className="text-[#433443] font-semibold text-xsm">
                {title}
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-[#9F50ED] flex justify-center items-center w-[32px] h-[32px] rounded-full relative">
                <img src={notification_icon} alt="notification" />
                <div className="bg-[#d53502] w-[10px] h-[10px] rounded-full absolute -right-1 top-1 border-white border-2"></div>
              </div>
              <div className="bg-[#9F50ED] flex justify-center items-center w-[32px] h-[32px] rounded-full">
                <p className="text-white text-xs font-medium">
                  {"T "} {"U"}
                  {/* {last_name ? last_name.charAt(0).toUpperCase() : "U"} */}
                </p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer relative">
                <p className="text-[#433443] text-sm font-medium">
                  {"Test"} {"User"}
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 md:px-6 py-6">{children}</div>
        </div>
      </div>
    </>
  );
}
