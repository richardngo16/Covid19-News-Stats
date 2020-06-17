import Select from 'react-select'
import React, { useEffect } from "react";
import { STORAGE_CONSTANTS, ENDPOINT } from './constants'
import localForage from 'localforage'

function Selector() {
    useEffect(() => {

        fetchAllCountries();
    });
    return (<React.Fragment>
        <Select />
    </React.Fragment>)
}

const fetchAllCountries = async () => {
    const countriesInStorage = await localForage.getItem(STORAGE_CONSTANTS.COUNTRIES)
    if (!countriesInStorage) {
        // no countries stored, make network call
        const response = await fetch(ENDPOINT.COUNTRIES);
        const data = await response.json();
        await setCountriesInStorage(mapCountryData(data.countries))
    } else {
        // country list already exists in storage
        console.log(countriesInStorage)
    }
}
const mapCountryData = (countries) => {
    return countries.map(country => {
        return { label: country.name, value: country.iso2 };
    })
}
const setCountriesInStorage = async (data) => {
    localForage.setItem(STORAGE_CONSTANTS.COUNTRIES, data)
}