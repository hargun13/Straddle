// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          scales: {
            x: {
              display: false, // Hide x-axis
              grid: {
                display: false, // Hide x-axis grid lines
              },
            },
            y: {
              display: false, // Hide y-axis
              grid: {
                display: false, // Hide y-axis grid lines
              },
            },
          },
          plugins: {
            title: {
              display: false,
              // text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
          elements: {
            line: {
              tension: 0, // Disable bezier curves to make a straight line
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;
