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
  data: number;
};

interface AreaChartProps {
  data: AreaInfo[];
  height: number;
  color: string;
  id: string;
}

const Chart: React.FC<AreaChartProps> = ({ data, height, color, id }) => {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="crops1" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor={color} />
              <stop offset="1" stopColor="rgba(43, 140, 52, 0.00)" />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="crops2" x1="0" y1="0" x2="0" y2="1">
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
            dataKey="data"
            stackId="1"
            stroke={color}
            fill={`url(${id})`}
            strokeWidth={2}
            fillOpacity={0.1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
