import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import BarChartCustomTooltip from "./tooltips/BarChartCustomTooltip";
import data from "../jsondata/BarChart.json";

const SprintBarChart = () => {
  return (
    <div className="chart-container">
      <div className="d-flex justify-even">
        <p className="area-chart-title">3% Unestimate issues</p>
        <p className="area-chart-title">
          *Forecast - Numberof sprints required
        </p>
      </div>
      <BarChart
        className="chart-padding chart-margin"
        width={700}
        height={400}
        data={data}
        barCategoryGap={25}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name">
          <Label value="Sprints" position="insideBottom" offset={-15} />
        </XAxis>
        <YAxis>
          <Label value="Story Points(SP)" angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip content={<BarChartCustomTooltip />} cursor={false} />
        <Legend iconType="circle" position="bottom" />
        <Bar type="" dataKey="SP Added" stackId="a" fill="#8884d8" />
        <Bar dataKey="SP completed" stackId="a" fill="#82ca9d" />
        <Bar dataKey="SP Planed" fill="#ffc658" />
        <Bar dataKey="SP forecast" fill="#aaa" />
      </BarChart>
    </div>
  );
};

export default SprintBarChart;
