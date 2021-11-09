import React from "react";
import { Chart } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import s from "./ChartReport.module.css"

Chart.register(ChartDataLabels)
const data = {
  datasets: [
    {
      data: [
        { id: "Свинина", nested: { value: 5000 } },
        { id: "Говядина", nested: { value: 4500 } },
        { id: "Курица", nested: { value: 3200 } },
        { id: "Рыба", nested: { value: 2100 } },
        { id: "Панини", nested: { value: 1800 } },
        { id: "Кофе", nested: { value: 1700 } },
        { id: "Спагетти", nested: { value: 1500 } },
        { id: "Шоколад", nested: { value: 800 } },
        { id: "Маслины", nested: { value: 500 } },
        { id: "Зелень", nested: { value: 300 } },
      ].sort((a, b) => {
        return b.nested.value - a.nested.value;
      }),

      maxBarThickness: 15,
      borderRadius: 20,
      minBarLength: 100,
      backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
      borderColor: ["rgba(0, 0, 0, 0)"],
      borderWidth: 1,
      datalabels: {
        formatter: function (value, context) {
          // console.log(
          //   context.chart.data.datasets[0].data[context.dataIndex].nested.value
          // );
          return (
            context.chart.data.datasets[0].data[context.dataIndex].nested
              .value + " грн"
          );
        },
        color: "#52555F",
        anchor: "end",
        align: "top",
      },
      plugins: [ChartDataLabels],
    },
  ],
};

const options = {
  indexAxis: "y",
  layout: {
    padding: {
      left: 30,
      right: 30,
      top: 30,
    },
  },
  parsing: {
    xAxisKey: "nested.value",
    yAxisKey: "id",
    key: "data.nested.value",
  },

  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  maintainAspectRatio: true,
  responsive: true,
  aspectRatio: 1,
  scales: {
    x: {
      grid: {
        display: false,
        borderColor: "white",
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
        borderColor: "white",
      },

      ticks: {
        align: "start",
        mirror: true,
        labelOffset: -19,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const ChartReportMobile = () => (
  <div className={s.charterReport}>
    <Bar data={data} options={options} />
  </div>
);

export default ChartReportMobile;