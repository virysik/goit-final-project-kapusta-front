import React,{ useState} from 'react';
import { Chart } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import s from './ChartReport.module.css';
// import { expensesOpt, incomesOpt } from '../../data/optionsChart';
// import { expensesOpt } from '../../pages/ReportsView/index';
import {  useSelector } from 'react-redux';
import { transactionsSelectors,} from 'redux/transactions';

Chart.register(ChartDataLabels);

function ChartReport() {

  // const currentCatDetails = useSelector(transactionsSelectors.getFilteredCategoryExpenses);
  const currentCategory = useSelector(transactionsSelectors.getCurrentType);
    const currentCatDetails = useSelector(transactionsSelectors.getFilteredCategoryExpenses);
  // const currentCategory = useSelector(transactionsSelectors.getCurrentType);

  const data = currentCatDetails?.details;

  const aspect = currentCategory === 'expenses' ? 3 : 3;

    const dataIncomings = {
    datasets: [
      {
        data: async function () {
          await data.sort((a, b) => {
            return b.nested.value - a.nested.value;
          })
          return data
        },

        // optArr.sort((a, b) => {
        //   return b.nested.value - a.nested.value;
        // }),

        maxBarThickness: 38,
        borderRadius: 20,
        minBarLength: 2,
        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
        borderColor: ['rgba(0, 0, 0, 0)'],
        borderWidth: 1,
        datalabels: {
          formatter: function (value, context) {
            // console.log(
            //   context.chart.data.datasets[0].data[context.dataIndex].nested.value
            // );
            return (
              context.chart.data.datasets[0].data[context.dataIndex].nested
                .value + 'грн'
            );
          },
          color: '#52555F',
          anchor: 'end',
          align: 'top',
        },
        plugins: [ChartDataLabels],
      },
    ],
  };

  const dataExpenses = {
    datasets: [
      {
        data: data,
        maxBarThickness: 38,
        borderRadius: 20,
        minBarLength: 2,
        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
        borderColor: ['rgba(0, 0, 0, 0)'],
        borderWidth: 1,
        datalabels: {
          formatter: function (value, context) {
            // console.log(
            //   context.chart.data.datasets[0].data[context.dataIndex].nested.value
            // );
            return (
              context.chart.data.datasets[0].data[context.dataIndex].nested
                .value + 'грн'
            );
          },
          color: '#52555F',
          anchor: 'end',
          align: 'top',
        },
        plugins: [ChartDataLabels],
      },
    ],
  };
  const options = {
    parsing: {
      xAxisKey: 'id',
      yAxisKey: 'nested.value',
      key: 'data.nested.value',
    },
    responsive: true,
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 30,
        // bottom: 20,
      },
    },
    aspectRatio: aspect,
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: 'white',
        },
      },
      y: {
        grid: {
          borderColor: 'white',
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={s.charterReport}>
      { currentCategory === 'expenses'&& <Bar data={dataExpenses} options={options} />}
      { currentCategory === 'incomings'&& <Bar data={dataIncomings} options={options}/>}
    </div>
  );
}

export default ChartReport;
