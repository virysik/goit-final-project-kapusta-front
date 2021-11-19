import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import Balance from 'components/Balance';
import IncomesForm from 'components/IncomesForm';
import 'react-tabs/style/react-tabs.css';
import Calendar from 'components/Calendar';
import MobileTable from 'components/IncomesTable/MobileTable';
import s from './BalanceViewMob.module.css';

export default function BalanceViewMob() {
  const [showTabs, setShowTabs] = useState(true);
  const [showTabPanel, setShowTabPanel] = useState(false);

  const handleTabClick = () => {
    setShowTabs(false);
    setShowTabPanel(true);
  };

  const handleFormClick = () => {
    setShowTabs(true);
    setShowTabPanel(false);
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
          <Tab className={s.tabsMobileR} onClick={handleTabClick}>
            Доход
          </Tab>
        </TabList>

        <TabPanel
          className={
            showTabPanel ? s.tabPanelMobBalance : s.tabPanelMobNoBalance
          }
        >
          <button
            type="button"
            className={s.arrowWrapper}
            onClick={handleFormClick}
          ></button>
          <IncomesForm type="expenses" onHandleClick={handleFormClick} />
        </TabPanel>

        <TabPanel
          className={
            showTabPanel ? s.tabPanelMobBalance : s.tabPanelMobNoBalance
          }
        >
          <button
            type="button"
            className={s.arrowWrapper}
            onClick={handleFormClick}
          ></button>
          <IncomesForm type="incomes" onHandleClick={handleFormClick} />
        </TabPanel>
      </Tabs>
    </>
  );
}
