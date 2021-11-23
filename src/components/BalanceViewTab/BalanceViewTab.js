import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions/';
import Svodka from '../Svodka';
import Balance from 'components/Balance';
import Container from 'components/Container';
import Form from 'components/IncomesForm/Form';
import Table from 'components/IncomesTable/Table';
import s from './BalanceViewTab.module.css';
import * as api from '../../services/transactionsApi';

export default function BalanceViewTab() {
  const [summary, setSummary] = useState([]);
  const [type, setType] = useState(false);
  const year = useSelector(transactionsSelectors.getYear);
  const incomeTrans = useSelector(transactionsSelectors.getIncTrans);
  const expenseTrans = useSelector(transactionsSelectors.getOutTrans);

  useEffect(() => {
    getSummary({ year, type });
  }, [type, year, incomeTrans, expenseTrans]);

  const onIncomeClick = () => {
    setType(true);
  };

  const onExpenceClick = () => {
    setType(false);
  };

  const getSummary = async ({ year, type }) => {
    if (!type) {
      const { data } = await api.getSummaryOut(year);
      const result = data.result;

      result.sort((a, b) => a.month - b.month);

      getMonth(result);
      setSummary(result);
    }

    if (type) {
      const { data } = await api.getSummaryInc(year);
      const result = data.result;

      result.sort((a, b) => a.month - b.month);

      getMonth(result);
      setSummary(result);
    }
  };

  function getMonth(summary) {
    return summary.forEach(item => {
      switch (item.month) {
        case '1':
          item.month = 'Январь';
          break;

        case '2':
          item.month = 'Февраль';
          break;

        case '3':
          item.month = 'Март';
          break;

        case '4':
          item.month = 'Апрель';
          break;

        case '5':
          item.month = 'Май';
          break;

        case '6':
          item.month = 'Июнь';
          break;

        case '7':
          item.month = 'Июль';
          break;

        case '8':
          item.month = 'Август';
          break;

        case '9':
          item.month = 'Сентябрь';
          break;

        case '10':
          item.month = 'Октябрь';
          break;

        case '11':
          item.month = 'Ноябрь';
          break;

        case '12':
          item.month = 'Декабрь';
          break;

        default:
          break;
      }
    });
  }

  return (
    <Container>
      <section className={s.section}>
        <Balance />
      </section>
      <Tabs className={s.tabs}>
        <TabList className={s.tabList}>
          <Tab
            selectedClassName={s.active}
            className={s.tab}
            onClick={onExpenceClick}
          >
            Расход
          </Tab>
          <Tab
            selectedClassName={s.active}
            className={s.tab}
            onClick={onIncomeClick}
          >
            Доход
          </Tab>
        </TabList>
        <TabPanel className={s.tabPanel}>
          <div className={s.tabPanelContainer}>
            <Form type="expenses" onHandleClick={() => {}} />
            <div className={s.tableContainer}>
              <Table type={type} />
              <div className={s.svodkaDesck}>
                <Svodka items={summary} />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel className={s.tabPanel}>
          <div className={s.tabPanelContainer}>
            <Form type="incomes" onHandleClick={() => {}} />
            <div className={s.tableContainer}>
              <Table type={type} />
              <div className={s.svodkaDesck}>
                <Svodka items={summary} />
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
      <section className={s.svodkaTab}>
        <Svodka items={summary} />
      </section>
    </Container>
  );
}
