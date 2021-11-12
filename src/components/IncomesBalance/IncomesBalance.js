import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Calendar from 'components/Calendar';
import IncomesForm from 'components/IncomesForm';
import Balance from 'components/Balance';
import ArrowToGoBack from 'components/ArrowToGoBack';
import 'react-tabs/style/react-tabs.css';
import s from './IncomesBalance.module.css';

export default function Incomes() {
  let [showTabs, setShowTabs] = useState(false);

  const handleTabClick = e => {
    setShowTabs(true);
  };

  const onHandleClick = () => {
    setShowTabs(false);
  };

  return (
    <>
      {!showTabs && (
        <>
          <Balance />
          <Calendar />
        </>
      )}

      <Tabs>
        <TabList className={!showTabs ? s.tabListMobile : s.tabListMobileNot}>
          <Tab className={s.tabsMobileL} onClick={handleTabClick}>
            Расход
          </Tab>
          <Tab className={s.tabsMobileR} onClick={handleTabClick}>
            Доход
          </Tab>
        </TabList>

        <TabPanel
          className={showTabs ? s.tabPanelMobBalance : s.tabPanelMobNoBalance}
        >
          <div className={s.arrowWrapper}>
            <ArrowToGoBack />
          </div>
          <IncomesForm onHandleClick={onHandleClick} />
        </TabPanel>

        <TabPanel
          className={showTabs ? s.tabPanelMobBalance : s.tabPanelMobNoBalance}
        >
          <div className={s.arrowWrapper}>
            <ArrowToGoBack />
          </div>
          <IncomesForm onHandleClick={onHandleClick} />
        </TabPanel>
      </Tabs>
    </>
  );
}
