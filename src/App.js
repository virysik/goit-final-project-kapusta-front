import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import { getIsFetchingCurrent } from './redux/auth/auth-selectors';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivatRoute';
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
  import(
    'pages/ReportsView' /*webpackChunkName: "reports-view" */
  ),
);
const DevelopersView = lazy(() =>
  import(
    'pages/DevelopersView/DevelopersView' /*webpackChunkName: "developers-view" */
  ),
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Switch>
        <Suspense fallback={<OnLoader />}>
          <PublicRoute exact path="/">
            <HomePageView />
          </PublicRoute>
          <PrivateRoute path="/balance" redirectTo="/">
            <BalanceView />
          </PrivateRoute>
          <PrivateRoute path="/reports" redirectTo="/">
            <ReportsView />
          </PrivateRoute>
          <PublicRoute path="/developers" redirectTo="/">
            <DevelopersView />
          </PublicRoute>
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
