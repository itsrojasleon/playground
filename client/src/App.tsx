import Header from 'components/header';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/home'));
// const Bundle = lazy(() => import('./pages/bundle'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div style={{ width: '95%', margin: 'auto' }}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {/* <Route path="/bundles/:id" component={Bundle} /> */}
              <Route path="/" component={Home} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
