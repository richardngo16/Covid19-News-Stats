import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { STORAGE_CONSTANTS } from './constants'
import localForage from 'localforage'

function App() {
  useEffect(() => {
    async function fetchAllCountries() {
      const countriesInStorage = await localForage.getItem(STORAGE_CONSTANTS.COUNTRIES)
      if (!countriesInStorage) {
        // no countries stored, make network call
        const response = await fetch("https://covid19.mathdro.id/api/countries");
        const data = await response.json();
        await setCountriesInStorage(mapCountryData(data.countries))
      } else {
        // country list already exists in storage
        console.log(countriesInStorage)
      }
    }
    fetchAllCountries();
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

const mapCountryData = (countries) => {
  return countries.map(country => {
    return { label: country.name, value: country.iso2 };
  })
}
const setCountriesInStorage = async (data) => {
  localForage.setItem(STORAGE_CONSTANTS.COUNTRIES, data)
}