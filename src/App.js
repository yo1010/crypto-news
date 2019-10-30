import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import NavBar from "./Navbar";
import TopNews from "./TopNews";
import './App.css';
import News from './News';
import NewsPage from './NewsPage';
import Default from './Default';
import Footer from './Footer';
import SearchResults from './SearchResults';

class App extends Component {
  render() {
    return (      
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={TopNews}/>
          <Route path="/newsarticle" component={NewsPage}/>
          <Route path="/search-results" component={SearchResults}/>
          <Route component={Default}/>
        </Switch>
        <News/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
