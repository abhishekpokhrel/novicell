import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import WineDetails from './components/wines/WineDetails'
import SignIn from './components/auth/SignIn'
import CreateWine from './components/wines/CreateWine'

function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
          <Route path='/' exact component={Dashboard}/>
          <Route path='/wine/:id' component={WineDetails} />
          <Route path='/signin' component={SignIn}/>
          <Route path='/createwine' component={CreateWine}/>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
