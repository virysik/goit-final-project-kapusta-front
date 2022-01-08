import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useSelector } from 'react-redux';
import { calendarSelectors } from '../../redux/extraInfo';
import {
  useGetSummaryOutQuery,
  useGetSummaryIncQuery,
} from '../../services/rtk-transactions';
import Svodka from '../Svodka';
import Balance from 'components/Balance';
import Container from 'components/Container';
import Form from 'components/IncomesForm/Form';
import Table from 'components/IncomesTable/Table';
import s from './BalanceViewTab.module.css';
import { getSummary } from 'helpers';

export default function BalanceViewTab() {
  const [summary, setSummary] = useState([]);
  const [type, setType] = useState(false);
  const year = useSelector(calendarSelectors.getYear);

  const { data: out } = useGetSummaryOutQuery(year);
  const { data: inc } = useGetSummaryIncQuery(year);
  const summaryOut = out?.data.result;
  const summaryInc = inc?.data.result;

  useEffect(() => {
    getSummary(type, setSummary, summaryOut, summaryInc);
  }, [summaryInc, summaryOut, type]);

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
