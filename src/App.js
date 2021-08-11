import React, { Component } from 'react';
import './App.css';
import DATA from './data.js'
import Table from './components/Table'

const columns = [
  {name: 'Airline', property: 'airline'},
  {name: 'Source Airport', property: 'src'},
  {name: 'Destination Airport', property: 'dest'},
]

const formatValue = (property, value) => {
  if (property === 'airline') {
    return DATA.getAirlineById(value) 
  } else {
    return DATA.getAirportByCode(value)
  }
}
  

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <Table className="routes-table" columns={columns} rows={DATA.routes} format={formatValue} perPage={25} />
  </section>
</div>
)

export default App;
