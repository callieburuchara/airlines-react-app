import React, { Component} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import DATA from './data.js'
import Table from './components/Table'
import Select from './components/Select'

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

const App = () => {

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section><br/><br/>
        <Select options={DATA.airlines} allTitle="All Airlines" name="airline" valueKey="id" titleKey="name" leadingText="Show routes on"/>
        <Select options={DATA.airports} allTitle="All Airports" name="airport" valueKey="code" titleKey="name" leadingText=" flying in or out of " />
    
        <br/><br/>
        <Table className="routes-table" columns={columns} rows={useSelector(state => state.filteredData)} format={formatValue} perPage={25} />
      </section>
    </div>
  )
}

export default App;
