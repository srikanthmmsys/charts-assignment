import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Legend,
} from "recharts";
import AreaChartCustomTooltip from "./tooltips/AreaChartCustomTooltip";
import data from "../jsondata/AreaChart.json";

const StreamedAreaChart = () => {
  return (
    <div className="chart-container">
      <div className="d-flex justify-end">
        <p className="area-chart-title">Total lead time:35days(avg)</p>
        <p className="area-chart-title">Total cycle time:33days(avg)</p>
      </div>
      <AreaChart
        width={700}
        height={400}
        data={data}
        className="chart-padding chart-margin"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name">
          <Label value="Months" position="insideBottom" offset={-15} />
        </XAxis>
        <YAxis>
          <Label value="Story Points(days)" angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip content={<AreaChartCustomTooltip />} />
        <Legend iconType="circle" position="bottom" align="center" />
        <Area dataKey="Issue Open" stroke="#8884d8" fill="#8884d8" />
        <Area dataKey="Issue Start" stroke="#82ca9d" fill="#82ca9d" />
        <Area dataKey="Issue Completed" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
    </div>
  );
};

export default StreamedAreaChart;
