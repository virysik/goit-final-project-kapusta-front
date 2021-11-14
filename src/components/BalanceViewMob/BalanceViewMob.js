import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import Balance from 'components/Balance';
import IncomesForm from 'components/IncomesForm';
import ArrowToGoBack from 'components/ArrowToGoBack';
import 'react-tabs/style/react-tabs.css';
import Calendar from 'components/Calendar';
import MobileTable from 'components/IncomesTable/MobileTable';
import s from './BalanceViewMob.module.css';

export default function BalanceViewMob() {
  const [showTabs, setShowTabs] = useState(true);
  const [showTabPanel, setShowTabPanel] = useState(false);
  const handleTabClick = e => {
    setShowTabs(false);
    setShowTabPanel(true);
  };
  return (
    <>
      {showTabs && (
        <>
          <Balance />
          <Calendar />

          <MobileTable />
        </>
      )}

      <Tabs>
        <TabList className={showTabs ? s.tabListMobile : s.tabListMobileNot}>
          <Tab className={s.tabsMobileL} onClick={handleTabClick}>
            Расход
          </Tab>
          <Tab className={s.tabsMobileR}>Доход</Tab>
        </TabList>

        <TabPanel
          className={
            showTabPanel ? s.tabPanelMobBalance : s.tabPanelMobNoBalance
          }
        >
          <div className={s.arrowWrapper}>
            <ArrowToGoBack />
          </div>
          <IncomesForm type="expenses" />
        </TabPanel>

        <TabPanel
          className={
            showTabPanel ? s.tabPanelMobBalance : s.tabPanelMobNoBalance
          }
        >
          {/* <div className={s.arrowWrapper}>
            <ArrowToGoBack />
          </div>
          <IncomesForm type="incomes" /> */}
        </TabPanel>
      </Tabs>
    </>
  );
}
