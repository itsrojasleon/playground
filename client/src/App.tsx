import Header from 'components/header';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/home'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
