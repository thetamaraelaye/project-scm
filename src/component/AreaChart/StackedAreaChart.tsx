import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
// import { CustomTooltip } from "./ToolTip";

type AreaInfo = {
  name: string;
  farmerIncome: number;
  averagePerIncome: number;
};

type AreaInfoTwo = {
  name: string;
  income: number;
  expenditure: number;
};

interface AreaChartProps {
  data: AreaInfo[];
  height: number;
}

interface AreaChartTwoProps {
  data: AreaInfoTwo[];
  height: number;
}

export const StackedAreaChart: React.FC<AreaChartProps> = ({
  data,
  height,
}) => {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorFarmerIncome" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#9437f1" />
              <stop offset="1" stopColor="rgba(43, 140, 52, 0.00)" />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient
              id="colorAveragePerIncome"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop stopColor="#FFC508" />
              <stop offset="1" stopColor="rgba(255, 197, 8, 0.00)" />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            style={{
              fontSize: "12px",
              fontFamily: "Inter",
              fontWeight: 400,
              lineHeight: "18px",
              color: "#667085",
            }}
          />
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            strokeWidth={1}
          />

          {/* <Tooltip content={<CustomTooltip />} /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="average_peer_income"
            stackId="1"
            stroke="#FFC508"
            // fill=" #FFFFFF00"
            fill="url(#colorAveragePerIncome)"
            strokeWidth={2}
            fillOpacity={0.1}
          />
          <Area
            type="monotone"
            dataKey="farmer_income"
            stackId="1"
            stroke="#9437f1"
            fill="url(#colorFarmerIncome)"
            strokeWidth={2}
            fillOpacity={0.1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export const StackedAreaChartTwo: React.FC<AreaChartTwoProps> = ({
  data,
  height,
}) => {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#9437f1" />
              <stop offset="1" stopColor="rgba(43, 140, 52, 0.00)" />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="colorExpenditure" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#B92020" />
              <stop offset="1" stopColor="rgba(255, 197, 8, 0.00)" />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            style={{
              fontSize: "12px",
              fontFamily: "Inter",
              fontWeight: 400,
              lineHeight: "18px",
              color: "#667085",
            }}
          />
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            strokeWidth={1}
          />

          {/* <Tooltip content={<CustomTooltip />} /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="farmer_expenditure"
            stackId="1"
            stroke="#B92020"
            // fill=" #FFFFFF00"
            fill="url(#colorExpenditure)"
            strokeWidth={2}
            fillOpacity={0.1}
          />
          <Area
            type="monotone"
            dataKey="farmer_income"
            stackId="1"
            stroke="#9437f1"
            fill="url(#colorIncome)"
            strokeWidth={2}
            fillOpacity={0.1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
