import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import ControlPanel from './components/pages/ControlPanel';

function App() {
  return (
    <>
        <Router>
          <Switch>
            <Route path='/' exact component={ControlPanel} />
          </Switch>
        </Router>
    </>
  );
}

export default App;
