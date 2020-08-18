import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
