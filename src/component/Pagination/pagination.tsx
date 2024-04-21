import React, { useState } from "react";
import "./pagination.css";
import {
  ExpandMore,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";

type Pagination = {
  onPageChange: (p: number) => void;
  totalItems: number;
  page: number;
  pageSize: number;
};

const PaginationComponent = ({
  onPageChange,
  totalItems,
  page,
  pageSize,
}: Pagination) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const onNext: React.MouseEventHandler<HTMLParagraphElement> = () => {
    onPageChange(page + 1);
  };

  const onPrevious: React.MouseEventHandler<HTMLParagraphElement> = () => {
    onPageChange(page - 1);
  };

  const handlePageClick = (number: number) => {
    setIsOptionsOpen(false);
    onPageChange(number);
  };

  return (
    <div className="flex justify-between w-full p-4 font-medium bg-white text-sm leading-4 text-secondary1">
      <div className="flex gap-[37px]">
        <p>
          Items per page: <span className="pl-1">{pageSize}</span>
        </p>
        <p>
          Showing {totalItems <= pageSize - 1 ? totalItems : pageSize} of{" "}
          {totalItems} items
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-3">
          <div className="relative">
            <div className="relative">
              {page}
              <span className="pl-[13px]">
                <ExpandMore
                  style={{ fontSize: "16px", cursor: "pointer" }}
                  onClick={() => setIsOptionsOpen(!isOptionsOpen)}
                />
              </span>
            </div>
          </div>

          <p>Of {Math.ceil(totalItems / pageSize)} pages</p>

          <p>
            {" "}
            <span className="" onClick={page <= 1 ? () => {} : onPrevious}>
              <KeyboardArrowLeft
                className={`${
                  page <= 1
                    ? "cursor-not-allowed text-secondary"
                    : "cursor-pointer text-[#503a4c]"
                } `}
                style={{ fontSize: "16px" }}
              />
            </span>
            <span
              className="pl-[13px]"
              onClick={
                Math.ceil(totalItems / pageSize) === page ? () => {} : onNext
              }
            >
              <KeyboardArrowRight
                className={`${
                  Math.ceil(totalItems / pageSize) === page
                    ? "cursor-not-allowed text-secondary"
                    : "cursor-pointer text-[#503a4c]"
                } `}
                style={{ fontSize: "16px" }}
              />
            </span>
          </p>
        </div>

        <div className="h-fit w-full">
          {isOptionsOpen && (
            <div className="absolute z-[100] bg-white shadow-md bottom-[150%] rounded-[4px] w-[fit-content] max-h-[200px] overflow-scroll">
              <>
                {Array.from(
                  { length: Math.ceil(totalItems / pageSize) },
                  (_, index) => (
                    <div
                      key={index}
                      className="hover:bg-[#f5edf7] hover:text-primary p-2 text-center cursor-pointer"
                      onClick={() => handlePageClick(index + 1)}
                    >
                      <p className="p-1">{index + 1}</p>
                    </div>
                  )
                )}
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaginationComponent;
