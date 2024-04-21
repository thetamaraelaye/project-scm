import React from "react";
import close_icon from "../../assets/icons/clear_green.svg";
import { CSSTransition } from "react-transition-group";
import "./drawer.css";

type LayoutProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  overflow?: boolean;
};

const DrawerComponent = ({
  onClose,
  isOpen,
  title,
  children,
  width,
  overflow,
}: LayoutProps) => {
  return (
    <>
      <CSSTransition
        in={isOpen}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
      >
        <div
          className={`drawer fixed 
            inset-0 bg-secondary bg-opacity-50 z-20 opacity-0
             ${
               overflow === false ? "overflow-hidden" : "overflow-y-auto"
             } h-full w-full transition-all duration-[0.3s]`}
          onClick={onClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`drawer-content fixed z-40 top-0 -right-80  ${
              width ? width : "md:w-[500px]"
            }  w-80 h-screen py-6 px-6   ${
              overflow === false ? "overflow-hidden" : "overflow-y-auto"
            }  transition-all duration-[0.3s] bg-white`}
          >
            <div className="flex justify-between items-center">
              <h5 className="text-lg font-semibold text-secondary1">{title}</h5>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 bg-[#f5edf7]
                              py-3 px-6
                            rounded-lg text-sm flex items-center justify-center"
              >
                <img src={close_icon} className="" alt="close icon" />
              </button>
            </div>

            {/* drawer body */}

            {children}
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default DrawerComponent;
