import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'
import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import SummonerGame from '../SummonerGame/SummonerGame';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/:region/game/:name" component={SummonerGame} />
        </main>
      </div>
    );
  }
}

export default App;
