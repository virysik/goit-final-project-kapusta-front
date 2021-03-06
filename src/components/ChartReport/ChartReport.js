import React from 'react';
import { Chart } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux';
import { calendarSelectors } from '../../redux/extraInfo';
import { useDetailInfoForReportQuery } from '../../services/rtk-transactions';
import getFilteredCategory from '../../helpers/getFilteredCategory';
import s from './ChartReport.module.css';

Chart.register(ChartDataLabels);

function ChartReport() {
  const month = useSelector(calendarSelectors.getMonth);
  const year = useSelector(calendarSelectors.getYear);
  const currentCategory = useSelector(calendarSelectors.getCurrentCategory);
  const currentType = useSelector(calendarSelectors.getCurrentType);
  const { data } = useDetailInfoForReportQuery({ year, month });

  const getInfoExpenses = data?.data.expenses;
  const getInfoIncomings = data?.data.incomings;

  const sumExp = getFilteredCategory(getInfoExpenses, currentCategory);
  const sumInc = getFilteredCategory(getInfoIncomings, currentCategory);

  function ExpSort() {
    if (sumExp) {
      return getExp();
    }
  }
  function getExp() {
    const res = [...sumExp];
    return res.sort((a, b) => b.nested.value - a.nested.value);
  }

  function IncSort() {
    if (sumInc) {
      return getInc();
    }
  }
  function getInc() {
    const res = [...sumInc];
    return res.sort((a, b) => b.nested.value - a.nested.value);
  }

  const aspect = currentType === 'expenses' ? 3 : 3;

  const dataIncomings = {
    datasets: [
      {
        data: IncSort(),
        maxBarThickness: 38,
        borderRadius: 20,
        minBarLength: 2,
        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
        borderColor: ['rgba(0, 0, 0, 0)'],
        borderWidth: 1,
        datalabels: {
          formatter: function (value, context) {
            return (
              context.chart.data.datasets[0].data[context.dataIndex].nested
                .value + ' грн'
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
        data: ExpSort(),
        maxBarThickness: 38,
        borderRadius: 20,
        minBarLength: 2,
        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
        borderColor: ['rgba(0, 0, 0, 0)'],
        borderWidth: 1,
        datalabels: {
          formatter: function (value, context) {
            return (
              context.chart.data.datasets[0].data[context.dataIndex].nested
                .value + ' грн'
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
      // key: 'data.nested.value',
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
      {currentType === 'expenses' && (
        <Bar data={dataExpenses} options={options} redraw />
      )}
      {currentType === 'incomings' && (
        <Bar data={dataIncomings} options={options} redraw />
      )}
    </div>
  );
}

export default ChartReport;
