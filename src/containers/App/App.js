import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import SummonerGame from '../SummonerGame/SummonerGame';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/summoner/:name" component={SummonerGame} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
