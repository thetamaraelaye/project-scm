import React from 'react'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.jpg"
import logout_icon from "../../assets/icons/logout.svg";
import chevron_down from "../../assets/icons/chevron_down.svg";
import chevron_up from "../../assets/icons/chevron_up.svg";
import product_active from "../assets/icons/product_new.svg";
import ProductIcon from "../assets/icons/product.svg"
import dashboard_active from "../assets/icons/dashboard.svg";
import DashboardIcon from "../assets/icons/dashboard_white.svg"
import cashflow_active from "../assets/icons/inventory_new.svg";
import CashflowIcon from '../assets/icons/cashflow.svg';
import inventory_active from "../assets/icons/inventory_new.svg";
import InventoryIcon from '../assets/icons/inventory.svg';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import docs_active from "../assets/icons/docs_new.svg";
import DocIcon from '../assets/icons/docs.svg';
import report_active from "../assets/icons/reports_new.svg";
import ReportIcon from '../assets/icons/reports.svg';
import SupplierIcon from "../assets/icons/supplier.svg"
import supplier_active from "../assets/icons/supplier_new.svg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


type sidebarType = {
    children: React.ReactNode;
    title: string;
};

export default function Sidebar({ children, title }: sidebarType) {
    let location = useLocation();
    const [isNavMenu, setNavMenu] = React.useState(false);
    const [isDashboardHover, setIsDashboardHover] = React.useState(false);
    const [isInventoryHover, setIsInventoryHover] = React.useState(false);
    const [isSupplierHover, setIsSupplierHover] = React.useState(false);
    const [isProductsHover, setIsProductsHover] = React.useState(false);
    const [isReportsHover, setIsReportsHover] = React.useState(false);
    const [isCashflowHover, setIsCashflowHover] = React.useState(false);
    //const [isDocsHover, setIDocsHover] = React.useState(false);

    //const { first_name, last_name } = useAppSelector((state) => state.auth);

    const navigate = useNavigate();

    const toggleNavMenu = () => {
        setNavMenu(!isNavMenu);
    };

    const handleLogout = () => {
        // dispatch(logOut());
        navigate("/admin/dashboard");
    };

    return (
        <>
            <div className='hidden lg:flex h-screen bg-[#EBE9FE]'>
                <div className='md:w-64 bg-[#02324c] flex-shrink-0 overflow-y-scroll pt-[30px] sidebar_scroll'>
                    <div className="">

                    </div>
                    <img src={logo} alt="logo" className="pl-6  overflow-y-scroll" />
                    <div className=" cursor-pointer mt-[40px]">
                        <section>
                            <NavLink
                                to="/admin/dashboard"
                                onMouseEnter={() => setIsDashboardHover(true)}
                                onMouseLeave={() => setIsDashboardHover(false)}
                                className={
                                    location.pathname === "/dashboard"
                                        ? "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#011E2D] bg-white w-[98%] rounded-r-[8px]"
                                        : "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-white hover:text-[#011E2D] hover:bg-white w-[98%] rounded-r-[8px]"
                                }
                            >
                                {location.pathname.includes("/dashboard") ||
                                    // location.pathname.includes("profiles") ||
                                    // location.pathname.includes("edit-profile") ||
                                    isDashboardHover ? (
                                    <img src={dashboard_active} alt="dashboard" className="" />
                                ) : (
                                    <img src={DashboardIcon} alt="dashboard" className="" />
                                )}
                                <p className="font-semibold text-sm capitalize leading-[18px]">
                                    Dashboard
                                </p>
                            </NavLink>

                            <NavLink
                                to="/admin/inventory"
                                onMouseEnter={() => setIsInventoryHover(true)}
                                onMouseLeave={() => setIsInventoryHover(false)}
                                className={
                                        isInventoryHover
                                        ? "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px] text-[#011E2D] bg-white w-[98%] rounded-r-[8px]"
                                        : "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]   text-white hover:text-[#011E2D] hover:bg-white w-[98%] rounded-r-[8px]"
                                }
                            >
                                {location.pathname.includes("/inventory") ||
                                    isInventoryHover ? (
                                    <img src={inventory_active} alt="inventory" className="" />
                                ) : (
                                    <img src={InventoryIcon} alt="" className="" />
                                )}
                                <p className="font-semibold text-sm capitalize leading-[18px]">
                                    Inventory
                                </p>
                            </NavLink>

                            <NavLink
                                to="/admin/products"
                                onMouseEnter={() => setIsProductsHover(true)}
                                onMouseLeave={() => setIsProductsHover(false)}
                                className={
                                    location.pathname.includes("/products") ||
                                        isProductsHover
                                        ? "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#011E2D] bg-white w-[98%] rounded-r-[8px]"
                                        : "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]   text-white hover:text-[#011E2D] hover:bg-white w-[98%] rounded-r-[8px]"
                                }
                            >
                                {location.pathname.includes("/products") ||
                                    isProductsHover ? (
                                    <img src={product_active} alt="products" className="" />
                                ) : (
                                    <img src={ProductIcon} alt="products" className="" />
                                )}
                                <p className="font-semibold text-sm capitalize leading-[18px]">
                                Products
                                </p>
                            </NavLink>

                            <NavLink
                                to="/admin/cashflow"
                                onMouseEnter={() => setIsCashflowHover(true)}
                                onMouseLeave={() => setIsCashflowHover(false)}
                                className={
                                    location.pathname.includes("/cashflow") ||
                                        isCashflowHover
                                        ? "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#011E2D] bg-white w-[98%] rounded-r-[8px]"
                                        : "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-white hover:text-[#011E2D] hover:bg-white w-[98%] rounded-r-[8px]"
                                }
                            >
                                {location.pathname.includes("/cashflow") ||
                                    // location.pathname.includes("profiles") ||
                                    // location.pathname.includes("edit-profile") ||
                                    isCashflowHover ? (
                                    <img src={cashflow_active} alt="cashflow" className="" />
                                ) : (
                                    <img src={CashflowIcon} alt="cashflow" className="" />
                                )}
                                <p className="font-semibold text-sm capitalize leading-[18px]">
                                Cashflow
                                </p>
                            </NavLink>

                            <NavLink
                                to="/admin/orders"
                                className={
                                    location.pathname.includes("/orders")
                                        // location.pathname.includes("profiles") ||
                                        // location.pathname.includes("edit-profile") ||  
                                        ? "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#011E2D] bg-white w-[98%] rounded-r-[8px]"
                                        : "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-white hover:text-[#011E2D] hover:bg-white w-[98%] rounded-r-[8px]"
                                }
                            >
                                <ShoppingCartIcon style={{fontSize: "18px"}} />
                                <p className="font-semibold text-sm capitalize leading-[18px]">
                                Orders
                                </p>
                            </NavLink>


                            <NavLink
                                to="/admin/reports/"
                                onMouseEnter={() => setIsReportsHover(true)}
                                onMouseLeave={() => setIsReportsHover(false)}
                                className={
                                    location.pathname === "/admin/reports"
                                        ? "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-[#011E2D] bg-white w-[98%] rounded-r-[8px]"
                                        : "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-white hover:text-[#011E2D] hover:bg-white w-[98%] rounded-r-[8px]"
                                }
                            >
                                 {location.pathname.includes("/reports") ||
                                    // location.pathname.includes("profiles") ||
                                    // location.pathname.includes("edit-profile") ||
                                    isReportsHover? (
                                    <img src={report_active} alt="reports" className="" />
                                ) : (
                                    <img src={ReportIcon} alt="reports" className="" />
                                )}
                                <p className="font-semibold text-sm capitalize leading-[18px]">
                                  Reports
                                </p>
                            </NavLink>
                            
                            <NavLink
                                to="/admin/suppliers/"
                                onMouseEnter={() => setIsSupplierHover(true)}
                                onMouseLeave={() => setIsSupplierHover(false)}
                                className={
                                    location.pathname === "/admin/suppliers/"
                                        ? "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px] text-[#011E2D] bg-white w-[98%] rounded-r-[8px]"
                                        : "pl-[26.6px] flex gap-[18.5px] items-center  mb-[13px] py-[13px]  text-white hover:text-[#011E2D] hover:bg-white w-[98%] rounded-r-[8px]"
                                }
                            >
                                 {location.pathname.includes("/suppliers") ||
                                    // location.pathname.includes("profiles") ||
                                    // location.pathname.includes("edit-profile") ||
                                    isSupplierHover? (
                                    <img src={supplier_active} alt="suppliers" className="" />
                                ) : (
                                    <img src={SupplierIcon} alt="suppliers" className="" />
                                )}
                                <p className="font-semibold text-sm capitalize leading-[18px]">
                                    Suppliers
                                </p>
                            </NavLink>

                        </section>
                    </div>
                </div>
                <div className="py-4 flex-grow flex-auto flex-shrink overflow-y-scroll">
          {/* NAV BAR */}
          <div className="flex px-4 md:px-6 justify-between items-center">
            <div>
              <p className="text-sm font-semibold leading-4 text-[#344335]">
                {title}
              </p>
            </div>
          </div>
          <div className="px-4 md:px-6 py-6">{children}</div>
        </div>
            </div>

        </>
    )

}
