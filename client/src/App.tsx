import Header from 'components/header';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/home'));
const Bundle = lazy(() => import('./pages/bundle'));

const App = () => {
  return (
    <div style={{ height: '100vh' }}>
      <BrowserRouter>
        <Header />
        <div style={{ height: '92vh' }}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route path="/bundles/:id" component={Bundle} />
              <Route path="/" component={Home} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
