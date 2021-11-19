import React from 'react';
import { Chart } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import s from './ChartReport.module.css';
import { expensesOpt, incomesOpt } from '../../data/optionsChart';
import { useSelector } from 'react-redux';
import {
  transactionsSelectors,
} from 'redux/transactions';

Chart.register(ChartDataLabels);

function ChartReportMobile({ data }) {
  console.log(incomesOpt);
  console.log(data?.details);

  const currentCategory = useSelector(transactionsSelectors.getCurrentType);
  
  const dataIncomings = {
    datasets: [
      {
        data: incomesOpt.sort((a, b) => {
          return b.nested.value - a.nested.value;
        }),

        maxBarThickness: 15,
        borderRadius: 20,
        minBarLength: 100,
        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
        borderColor: ['rgba(0, 0, 0, 0)'],
        borderWidth: 1,
        datalabels: {
          formatter: function (value, context) {
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
        data: data?.details,

        maxBarThickness: 15,
        borderRadius: 20,
        minBarLength: 100,
        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
        borderColor: ['rgba(0, 0, 0, 0)'],
        borderWidth: 1,
        datalabels: {
          formatter: function (value, context) {
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
    indexAxis: 'y',

    layout: {
      padding: {
        left: 15,
        right: 30,
        top: 25,
      },
    },
    parsing: {
      xAxisKey: 'nested.value',
      yAxisKey: 'id',
      key: 'data.nested.value',
    },

    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    maintainAspectRatio: true,
    responsive: true,
    aspectRatio: 3,
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: 'white',
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          borderColor: 'white',
        },
        ticks: {
          align: 'start',
          mirror: true,
          labelOffset: -19,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
    },
  };
  return (
    <div className={s.charterReport}>
      {currentCategory === 'incomings' && <Bar data={dataIncomings} options={options} height={400} width={320} />}
      {currentCategory === 'expenses' && <Bar data={dataExpenses} options={options} height={300} width={320} />}
    </div>
  );
}

export default ChartReportMobile;
