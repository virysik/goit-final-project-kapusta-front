import axios from 'axios';
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
      const { data } = await axios.get(`/transactions/outgoings?year=${year}`);
      const result = data.data.result;

      result.sort((a, b) => sortMonth(a, b));

      getMonth(result);
      setSummary(result);
    }

    if (type) {
      const { data } = await axios.get(`/transactions/incomings?year=${year}`);
      const result = data.data.result;

      result.sort((a, b) => sortMonth(a, b));

      getMonth(result);
      setSummary(result);
    }

    function sortMonth(a, b) {
      if (a.month < b.month) {
        return 1;
      }
      if (a.month > b.month) {
        return -1;
      }
      return 0;
    }

    function getMonth(summary) {
      summary.forEach(item => {
        switch (item.month) {
          case '01':
            item.month = 'Январь';
            break;

          case '02':
            item.month = 'Февраль';
            break;

          case '03':
            item.month = 'Март';
            break;

          case '04':
            item.month = 'Апрель';
            break;

          case '05':
            item.month = 'Май';
            break;

          case '06':
            item.month = 'Июнь';
            break;

          case '07':
            item.month = 'Июль';
            break;

          case '08':
            item.month = 'Август';
            break;

          case '09':
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
  };

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
