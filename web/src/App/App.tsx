import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from "../Pages/Home";
import AboutPage from "../Pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
