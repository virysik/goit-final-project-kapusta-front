import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import OnLoader from 'components/OnLoader';
// import Balance from "components/Balance";
import './App.css';

const HomePageView = lazy(() =>
  import('pages/HomePageView' /*webpackChunkName: "home-page-view" */),
);
const BalanceView = lazy(() =>
  import('pages/BalanceView' /*webpackChunkName: "balance-view" */),
);
const ReportsView = lazy(() =>
  import('pages/ReportsView' /*webpackChunkName: "reports-view" */),
);

function App() {
  return (
    <>
      <Switch>
        {/* <Balance /> */}
        <Suspense fallback={<OnLoader />}>
          <Route path="/" exact component={HomePageView} />
          <Route path="/balance" component={BalanceView} />
          <Route path="/reports" component={ReportsView} />
          <Redirect to="/" />
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
