import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Typography } from "@material-ui/core";

const dataDoughnut = {
  labels: ["1~5일", "5~10일", "10~15일", "15~20일 이상"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const createHorizontalChartData = (items) => {
  let over20 = items.filter((item) => {
    const capturedDateByStr = new Date(item.capturedDate);
    const highestDateByStr = new Date(item.highestDate);
    var diff = Math.abs(
      capturedDateByStr.getTime() - highestDateByStr.getTime()
    );
    diff = Math.ceil(diff / (1000 * 3600 * 24));
    return diff > 20;
  });

  let over15 = items.filter((item) => {
    const capturedDateByStr = new Date(item.capturedDate);
    const highestDateByStr = new Date(item.highestDate);
    var diff = Math.abs(
      capturedDateByStr.getTime() - highestDateByStr.getTime()
    );
    diff = Math.ceil(diff / (1000 * 3600 * 24));
    return diff > 15 && diff <= 20;
  });

  let over10 = items.filter((item) => {
    const capturedDateByStr = new Date(item.capturedDate);
    const highestDateByStr = new Date(item.highestDate);
    var diff = Math.abs(
      capturedDateByStr.getTime() - highestDateByStr.getTime()
    );
    diff = Math.ceil(diff / (1000 * 3600 * 24));
    return diff > 10 && diff <= 15;
  });

  let over5 = items.filter((item) => {
    const capturedDateByStr = new Date(item.capturedDate);
    const highestDateByStr = new Date(item.highestDate);
    var diff = Math.abs(
      capturedDateByStr.getTime() - highestDateByStr.getTime()
    );
    diff = Math.ceil(diff / (1000 * 3600 * 24));
    return diff > 5 && diff <= 10;
  });

  let over0 = items.filter((item) => {
    const capturedDateByStr = new Date(item.capturedDate);
    const highestDateByStr = new Date(item.highestDate);
    var diff = Math.abs(
      capturedDateByStr.getTime() - highestDateByStr.getTime()
    );
    diff = Math.ceil(diff / (1000 * 3600 * 24));
    return diff > 0 && diff <= 5;
  });

  let benefitTotal = items.filter((item) => {
    const highestBenefit = (
      100 -
      (item.capturedPrice / item.highestPrice) * 100
    ).toFixed(2);

    return highestBenefit >= 0;
  });

  return {
    labels: ["1~5일", "5~10일", "10~15일", "15~20일", "20일 초과"],
    datasets: [
      {
        label: "전체 종목 중 비율(%)",
        data: [
          ((over20.length / benefitTotal.length) * 100).toFixed(2),
          ((over15.length / benefitTotal.length) * 100).toFixed(2),
          ((over10.length / benefitTotal.length) * 100).toFixed(2),
          ((over5.length / benefitTotal.length) * 100).toFixed(2),
          ((over0.length / benefitTotal.length) * 100).toFixed(2),
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
  // maintainAspectRatio: false,
  aspectRatio: 1,
  plugins: {
    legend: {
      display: true,
    },
  },
};

const DoughnutChart = (props) => (
  <>
    <div className="header">
      <h4 className="title">최고점 갱신 구간별 분포</h4>
    </div>
    <div>
      <Typography variant="caption">
        수익이 발생한 종목들의 최고 수익을 달성한 기간을 구간별로 분석합니다.
      </Typography>
    </div>
    <Doughnut
      data={() => createHorizontalChartData(props.items)}
      options={options}
      style={{ maxHeight: "10vw" }}
    />
  </>
);

export default DoughnutChart;
