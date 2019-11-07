import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import NavBar from "./components/Navbar";
import TopNews from "./components/TopNews";
import './App.css';
import News from './components/News';
import NewsPage from './components/NewsPage';
import Default from './components/Default';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import CryptoDictionary from './components/CryptoDictionary';
import BitcoinNews from './components/BitcoinNews';
import BlockchainNews from './components/BlockchainNews';

class App extends Component {
  render() {
    return (      
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={TopNews}/>
          <Route path="/newsarticle" component={NewsPage}/>
          <Route path="/search-results" component={SearchResults}/>
          <Route path="/crypto-dictionary" component={CryptoDictionary}/>
          <Route path="/bitcoin-news" component={BitcoinNews}/>
          <Route path="/blockchain-news" component={BlockchainNews}/>
          <Route component={Default}/>
        </Switch>
        <News/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
