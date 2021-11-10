import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import OnLoader from 'components/OnLoader';
import Header from 'components/Header';
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
      <Header />
      <Switch>
        <Suspense fallback={<OnLoader />}>
          <Route path="/a" exact component={HomePageView} />
          <Route path="/balance" component={BalanceView} />
          <Route path="/" component={ReportsView} />
          <Redirect to="/" />
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
