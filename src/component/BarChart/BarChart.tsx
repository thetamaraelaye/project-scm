import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  // Rectangle,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
// import { CustomTooltip } from "./ToolTip";

type BarInfo = {
  name: string;
  farmerCropYield: number;
  averagePerCropYield: number;
};

interface BarChartProps {
  data: BarInfo[];
  height: number;
  size?: number;
}

const Chart: React.FC<BarChartProps> = ({ height, data, size }) => {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
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
              <stop offset="1" stopColor="rgba(43, 140, 52, 0.00)" />
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
          <Tooltip />
          {/* <Tooltip content={<CustomTooltip />} /> */}
          <Bar
            dataKey="farmer_crop_yield"
            fill="#9437f1"
            barSize={size || 12}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="average_peer_crop_yield"
            fill="#FFC508"
            barSize={size || 12}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
