import React from 'react'
import { Link } from 'react-router-dom';

type cardType = {
    title: string;
    subtitle: string | number;
    href?: string;
    description?: string;
    color?: string;
    isLink?: boolean;
    hasStatus?: boolean;
    status?: string;
  };

export const CardWithBorderStatus = ({
    title,
    subtitle,
    href,
    description,
    color,
    isLink,
    hasStatus,
    status,
  }: cardType) => {
    return (
      <>
        <div
          className={`bg-white rounded-lg py-4 px-4 border-l-[3px] ${
            color ? color : "border-l-primary"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h6 className="text-tertiary font-semibold text-sm">{title}</h6>
            </div>
            {hasStatus && (
              <div className="bg-[#FDDED4] rounded-[4px] text-[#B92043] text-xs font-medium py-1 px-2">
                <p>{status}</p>
              </div>
            )}
          </div>
  
          <p className="text-secondary font-semibold text-[20px] mt-5">
            {subtitle}
          </p>
  
          <p className="mt-1 text-tertiary text-xs leading-4 font-medium">
            {description}
          </p>
  
          {isLink && (
            <div className="flex justify-end mt-3">
              <Link
                to={href ? href : "/"}
                className="text-primary text-[10px] font-semibold cursor-pointer"
              >
                See more
              </Link>
            </div>
          )}
        </div>
      </>
    );
  };