import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomeComponent from './Home';
import BuyComponent from './Buy';
import RentComponent from './Rent';
import SellComponent from './Sell';
import AboutComponent from './About';
import ContactComponent from './Contact';
import FooterComponent from './Footer';


function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/' exact component={HomeComponent}/>
          <Route path='/buy' exact component={BuyComponent}/>
          <Route path='/rent' exact component={RentComponent}/>
          <Route path='/sell' exact component={SellComponent}/>
          <Route path='/about' exact component={AboutComponent}/>
          <Route path='/contact' exact component={ContactComponent}/>
          <Redirect to="/"/>
        </Switch>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
