import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';
import Banner from './components/banner';
import Nav from './components/nav';

//Pages
import Overview from './pages/overview';
import Provincial from './pages/provincial';
import PageNotFound from './pages/404';

const App = () => (
  <>
    <GlobalStyle />
    <Banner />
    <Nav />
    <Switch>
      <Route path="/" exact component={Overview} />
      <Route path="/provincial" component={Provincial} />
      <Route component={PageNotFound} />
    </Switch>
  </>
);

export default App;
