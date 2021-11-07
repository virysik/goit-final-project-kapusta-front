import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Calendar from 'components/Calendar';
import IncomesForm from 'components/IncomesForm';
import 'react-tabs/style/react-tabs.css';
import s from './Incomes.module.css';

export default function Incomes() {
  let isBalance = false;

  return (
    <Tabs>
      <div className={s.listWrapper}>
        <TabList>
          <Tab>Расход</Tab>
          <Tab>Доход</Tab>
        </TabList>
      </div>

      <div className={isBalance ? s.isBalanseTabs : s.noBalanceTabs}>
        <TabPanel>
          <div>
            <Calendar />
            <IncomesForm />
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </div>
    </Tabs>
  );
}
