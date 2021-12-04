import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions/';
import {
  useGetSummaryOutQuery,
  useGetSummaryIncQuery,
  useIncTransDateQuery,
  useOutTransDateQuery,
  useDeleteTransactionMutation,
} from '../../services/rtk-transactions';
import Svodka from '../Svodka';
import Balance from 'components/Balance';
import Container from 'components/Container';
import Form from 'components/IncomesForm/Form';
import Table from 'components/IncomesTable/Table';
import s from './BalanceViewTab.module.css';
import { getMonth } from 'helpers';
// import { getSummary } from 'helpers';

export default function BalanceViewTab() {
  const [summary, setSummary] = useState([]);
  const [type, setType] = useState(false);
  // const year = useSelector(transactionsSelectors.getYear);
  // const incomeTrans = useSelector(transactionsSelectors.getIncTrans);
  // const expenseTrans = useSelector(transactionsSelectors.getOutTrans);
  const date = { year: '2021', month: '12', day: '26' };

  // const { data: incomeTrans } = useIncTransDateQuery(date);

  const year = date.year;

  const { data: out } = useGetSummaryOutQuery(year);
  const { data: inc } = useGetSummaryIncQuery(year);
  const summaryOut = out?.data.result;
  const summaryInc = inc?.data.result;

  const getSummary = async (type, setSummary) => {
    let result = [];
    await summaryOut;
    await summaryInc;
    type ? (result = summaryInc) : (result = summaryOut);

    // result && result.sort((a, b) => a.month - b.month);
    console.log(result);
    // result && getMonth(result);
    result && setSummary(result);
  };

  getSummary(type, setSummary);

  // useEffect(() => {
  //   getSummary(year, type, setSummary);
  // }, [type, year, incomeTrans, expenseTrans, getSummary]);

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
            onClick={() => setType(false)}
          >
            Расход
          </Tab>
          <Tab
            selectedClassName={s.active}
            className={s.tab}
            onClick={() => setType(true)}
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
