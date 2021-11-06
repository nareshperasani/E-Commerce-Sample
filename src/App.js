import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/cart" component={Cart}/>
          <Route path='/not-found' component={NotFound}/>
          <Route path="/" exact component={Home}/>
          <Redirect to="/not-found"/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;