import React from 'react';
import { Chart } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import s from './ChartReport.module.css';
import { expensesOpt, incomesOpt } from '../../data/optionsChart';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from 'redux/transactions';

Chart.register(ChartDataLabels);

function ChartReport({ type }) {
  const currentCatDetails = useSelector(
    transactionsSelectors.getFilteredCategoryExpenses,
  );

  console.log(currentCatDetails?.details); //

  const optArr = type === 'expenses' ? expensesOpt : incomesOpt;
  const aspect = type === 'expenses' ? 3 : 3;

  const data = {
    datasets: [
      {
        data: optArr.sort((a, b) => {
          return b.nested.value - a.nested.value;
        }),

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
      <Bar data={data} options={options} />
    </div>
  );
}

export default ChartReport;
