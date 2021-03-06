import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';
import { Toaster } from 'react-hot-toast';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivatRoute';
import OnLoader from 'components/OnLoader';
import AppBar from './components/AppBar';
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
const DevelopersView = lazy(() =>
  import(
    'pages/DevelopersView/DevelopersView' /*webpackChunkName: "developers-view" */
  ),
);
const GoogleRedirectView = lazy(() =>
  import(
    'pages/GoogleRedirectView' /*webpackChunkName: "google-redirect-view" */
  ),
);

function App() {
  // const token = useSelector(authSelectors.getToken);
  const isFetchingUser = useSelector(authSelectors.getIsFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!token) {
    //   return;
    // }
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Toaster />
      {isFetchingUser ? (
        <OnLoader />
      ) : (
        <Suspense fallback={<OnLoader />}>
          <Switch>
            <PublicRoute
              exact
              path="/google-redirect"
              restricted
              redirectTo="/balance"
            >
              <GoogleRedirectView />
            </PublicRoute>
            <PublicRoute exact path="/" restricted redirectTo="/balance">
              <HomePageView />
            </PublicRoute>
            <PrivateRoute path="/balance" redirectTo="/">
              <BalanceView />
            </PrivateRoute>
            <PrivateRoute path="/reports" redirectTo="/">
              <ReportsView />
            </PrivateRoute>
            <PublicRoute path="/developers">
              <DevelopersView />
            </PublicRoute>
          </Switch>
        </Suspense>
      )}
    </>
  );
}

export default App;
