import React from "react";
import { Bar } from "react-chartjs-2";
import { Typography } from "@material-ui/core";

const createHorizontalChartData = (items) => {
  let arr = items.slice(0, 10);
  let labels = arr.map((item) => {
    return item.itemName;
  });
  let data = arr.map((item) => {
    return item.benefit;
  });
  var dynamicColors = function (a) {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgba(255, 159, 64," + a + ")";
  };

  let bgc = [];
  let bc = [];

  for (let i in data) {
    bgc.push(dynamicColors(0.2));
    bc.push(dynamicColors(1));
  }

  return {
    labels: labels,
    datasets: [
      {
        label: "수익률(%)",
        data: data,
        backgroundColor: bgc,
        borderColor: bc,
        borderWidth: 1,
      },
    ],
  };
};

const options = {
  indexAxis: "y",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  // maintainAspectRatio: false,
  // aspectRatio: 1.5,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function HorizontalBarChart(props) {
  return (
    <>
      <div>
        <h4 className="title">Top 10 종목들</h4>
      </div>
      <div>
        <Typography variant="caption">
          수익종목중 최고 수익률을 기록한 10개 종목입니다.
        </Typography>
      </div>
      <Bar
        data={() => createHorizontalChartData(props.items)}
        options={options}
        style={{ maxHeight: "20vh" }}
      />
    </>
  );
}
