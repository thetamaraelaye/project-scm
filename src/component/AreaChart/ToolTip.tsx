import {
    ValueType,
    NameType,
  } from "recharts/types/component/DefaultTooltipContent";
  import { TooltipProps } from "recharts";
  
  export const CustomTooltip = ({
    label,
    payload,
    active,
  }: TooltipProps<ValueType, NameType>) => {
    if (active) {
      return (
        <div className="bg-[#161D17] rounded-lg p-3">
          <p className="text-xs font-semibold leading-4 text-[#FFFFFF]">
            {label}.
          </p>
  
          <div className="flex items-center gap-1 mt-2 justify-between">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <p className="text-xs font-semibold leading-4 text-[#FFFFFF]">
                Closing Balance
              </p>
            </div>
            {payload?.map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-xs font-semibold leading-4 text-[#FFFFFF]"
                >
                  ₦{item?.payload?.amount?.toLocaleString()}
                </p>
              );
            })}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  