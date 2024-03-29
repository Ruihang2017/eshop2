import './App.css';


import Header from './Header.js';
import Home from './Home.js'

import Checkout from "./Checkout";
import Login from "./Login";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
