import React from "react";
import close_icon from "../../assets/icons/clear.svg";
import { CSSTransition } from "react-transition-group";
import "./modal.css";

type LayoutProps = {
  title: string;
  subtitle: string;
  isOpen: boolean;
  size?: string;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalComponent = ({
  onClose,
  isOpen,
  title,
  subtitle,
  children,
  size,
}: LayoutProps) => {
  return (
    <>
      <CSSTransition
        in={isOpen}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
      >
        <div
          className="modal 
            overflow-y-auto overflow-x-hidden bg-secondary
            bg-opacity-50 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full
            opacity-0 transition-all duration-[0.3s]"
          onClick={onClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative p-4 md:p-8 w-full ${
              size ? size : "max-w-xl"
            } h-full md:h-auto mx-auto my-32 modal-content translate-y-[-200px] transition-all duration-[0.3s]`}
          >
            {/* modal content */}
            <div className="relative bg-white rounded-lg py-6 px-4 md:px-8">
              {/* modal header */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-semibold text-secondary">
                    {title}
                  </h3>
                  <p className="text-[#a296a3] text-xs font-medium mt-1">
                    {subtitle}
                  </p>
                </div>

                <div className="cursor-pointer" onClick={onClose}>
                  <img src={close_icon} alt="close icon" />
                </div>
              </div>

              {/* modal body */}
              <div>{children}</div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default ModalComponent;
