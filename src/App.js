import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { getIsFetchingCurrent, getToken, getCurrentUser } from './redux/auth/auth-selectors';
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


function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(state => getIsFetchingCurrent(state));

  const onToken = useSelector(getToken)
  
 useEffect(() => {
    if (onToken) {
      dispatch(getCurrentUser());
    }
    
  }, [dispatch, onToken]);
  
  return (
    <>
      <AppBar />
          <Suspense fallback={<OnLoader />}>
          {isFetchingCurrentUser ? (
          <OnLoader/>
        ) : (
          <Switch>
              <PublicRoute exact path="/"  redirectTo='/balance'>
                <HomePageView />
              </PublicRoute>
              <PrivateRoute path='/balance' redirectTo='/'>
                <BalanceView />
              </PrivateRoute>
              <PrivateRoute path='/reports' redirectTo='/'>
                <ReportsView />
              </PrivateRoute>
              <PublicRoute path='/developers' redirectTo='/'>
                <DevelopersView />
              </PublicRoute>
          </Switch>
        )}
      </Suspense>
    </>
  );
}

export default App;
