import React from "react";
import { Bar } from "react-chartjs-2";
import { Typography } from "@material-ui/core";

const createHorizontalChartData = (items) => {
  let over15 = items.filter((item) => {
    return item.benefit > 15;
  });
  let over10 = items.filter((item) => {
    return item.benefit <= 15 && item.benefit > 10;
  });
  let over5 = items.filter((item) => {
    return item.benefit <= 10 && item.benefit > 5;
  });
  let over0 = items.filter((item) => {
    return item.benefit <= 5 && item.benefit >= 0;
  });
  let less0 = items.filter((item) => {
    return item.benefit < 0;
  });

  return {
    labels: ["15% 이상", "10~15%", "5~10%", "0~5%", "0% 미만"],
    datasets: [
      {
        label: "전체 종목 중 비율(%)",
        data: [
          ((over15.length / items.length) * 100).toFixed(2),
          ((over10.length / items.length) * 100).toFixed(2),
          ((over5.length / items.length) * 100).toFixed(2),
          ((over0.length / items.length) * 100).toFixed(2),
          ((less0.length / items.length) * 100).toFixed(2),
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
};

const options = {
  responsive: true,
  // maintainAspectRatio: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const VerticalBarChart = (props) => (
  <>
    <div>
      <h4 className="title">수익구간별 종목 비율</h4>
    </div>
    <div>
      <Typography variant="caption">
        전체 종목 중 수익종목을 수익률구간별로 분석합니다.
      </Typography>
    </div>
    <Bar
      data={() => createHorizontalChartData(props.items)}
      options={options}
      style={{ maxHeight: "20vh" }}
    />
  </>
);

export default VerticalBarChart;
