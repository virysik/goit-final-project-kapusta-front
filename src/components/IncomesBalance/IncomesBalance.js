import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Calendar from 'components/Calendar';
import IncomesForm from 'components/IncomesForm';
import Balance from 'components/Balance';
import ArrowToGoBack from 'components/ArrowToGoBack';
import 'react-tabs/style/react-tabs.css';
import s from './IncomesBalance.module.css';

export default function IncomesBalance() {
  const balanceState = 12;
  let [balance, setBalance] = useState(0);
  let [showTabs, setShowTabs] = useState(false);
  let [showTable, setShowTable] = useState(false);

  const handleTabClick = e => {
    setShowTabs(false);
  };

  const onHandleClick = () => {
    setShowTabs(true);
  };

  return (
    <>
      {balanceState && showTabs && (
        <>
          <Balance />
          <Calendar />
        </>
      )}

      <Tabs>
        <TabList className={showTabs ? s.tabListMobile : s.tabListMobileNot}>
          <Tab className={s.tabsMobileL} onClick={handleTabClick}>
            Расход
          </Tab>
          <Tab className={s.tabsMobileR} onClick={handleTabClick}>
            Доход
          </Tab>
        </TabList>

        <TabPanel
          className={!showTabs ? s.tabPanelMobBalance : s.tabPanelMobNoBalance}
        >
          <div className={s.arrowWrapper}>
            <ArrowToGoBack />
          </div>
          <IncomesForm onHandleClick={onHandleClick} type="expenses" />
        </TabPanel>

        <TabPanel
          className={!showTabs ? s.tabPanelMobBalance : s.tabPanelMobNoBalance}
        >
          <div className={s.arrowWrapper}>
            <ArrowToGoBack />
          </div>
          <IncomesForm onHandleClick={onHandleClick} type="incomes" />
        </TabPanel>
      </Tabs>
    </>
  );
}
