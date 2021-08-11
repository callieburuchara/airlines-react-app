import React, { Component } from 'react';
import './App.css';
import DATA from './data.js'
import Table from './components/Table'
console.log(DATA.routes[0])

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <p>
      Welcome to the app!
    </p>
    <Table routes={DATA.routes}/>
  </section>
</div>
)

export default App;
