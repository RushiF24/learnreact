import React from "react";
import "./BarChart.css";

const BarChart = (props) => {
  return (  
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill">
            {props.value}
        </div>
        <div className="chart-bar__label">
            <h2>{props.label}</h2>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
