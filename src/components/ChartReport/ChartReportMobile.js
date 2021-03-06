import React from 'react';
import { Chart } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux';
import getFilteredCategory from '../../helpers/getFilteredCategory';
import { calendarSelectors } from '../../redux/extraInfo';
import { useDetailInfoForReportQuery } from '../../services/rtk-transactions';
import s from './ChartReport.module.css';

Chart.register(ChartDataLabels);
function ChartReportMobile() {
  const month = useSelector(calendarSelectors.getMonth);
  const year = useSelector(calendarSelectors.getYear);
  const { data } = useDetailInfoForReportQuery({ year, month });
  const currentType = useSelector(calendarSelectors.getCurrentType);
  const currentCategory = useSelector(calendarSelectors.getCurrentCategory);
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

  const dataIncomings = {
    datasets: [
      {
        data: IncSort(),
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
    aspectRatio: 1,
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
        // position: 'top',
      },
    },
  };

  return (
    <div className={s.charterReport}>
      {currentType === 'incomings' && (
        <Bar
          data={dataIncomings}
          options={options}
          height={400}
          width={320}
          redraw
        />
      )}
      {currentType === 'expenses' && (
        <Bar
          data={dataExpenses}
          options={options}
          height={300}
          width={320}
          redraw
        />
      )}
    </div>
  );
}

export default ChartReportMobile;
