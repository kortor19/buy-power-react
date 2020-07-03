import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//IMPORT COMPONENTS
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import {BuyElectricity} from './BuyElectricity';
import {Merchant} from './Merchant';
import {Contact} from './Contact';
import {FAQ} from './FAQ';
import {HourSupport} from './HourSupport';
import {Login} from './Login';
import {NoMatch} from './NoMatch';
import {Testimonials} from './components/Testimonials';
import {Partners} from './components/Partners';
import {BecomeMerchant} from './components/BecomeMerchant';
import {Footer} from './components/Footer';


function App() {
  return (

      <div id="root">
      <div className="app">
      <div className="home-page">
      <React.Fragment>
        <Navbar />
        <BuyElectricity/>
        <Merchant/>
        <Contact/>
        <FAQ/>
        <HourSupport/>
        <Login/>
        <Header />
        <Testimonials/>
        <Partners/>
        <BecomeMerchant/>
        <Footer/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component ={BuyElectricity} />
            <Route path="/" component ={Merchant} />
            <Route  path="/" component ={FAQ} />
            <Route  path="/" component ={Contact} />
            <Route  path="/" component ={HourSupport} />
            <Route  path="/" component ={Login} />
            <Route component ={NoMatch} />

          </Switch>
        </BrowserRouter>
      </React.Fragment>
      </div>
      </div>
      </div>
    
  );
}

export default App;
