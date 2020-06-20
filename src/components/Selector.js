import Select from 'react-select'
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from 'recoil'
import { selectedCountryStore } from '../stores/Store'
import { STORAGE_CONSTANTS, ENDPOINT } from '../utils/constants'
import { retrieveFromStorage, writeToStorage } from '../utils/persistance'

function Selector() {
    const [countries, setCountries] = useState([])
    const setSelectedCountry = useSetRecoilState(selectedCountryStore)
    useEffect(() => {
        // We want to make a network requests in case the country list changes for the API
        const fetchAllCountries = async () => {
            const countriesInStorage = await retrieveFromStorage(STORAGE_CONSTANTS.COUNTRIES)
            if (!countriesInStorage) {
                // no countries stored, make network call
                const response = await fetch(ENDPOINT.COUNTRIES);
                const data = await response.json();
                const countriesList = await writeToStorage(STORAGE_CONSTANTS.COUNTRIES, mapCountryData(data.countries))
                setCountries(countriesList)
            } else {
                // country list already exists in storage
                if (countries.length === 0) {
                    setCountries(countriesInStorage)
                }
            }
        }
        fetchAllCountries()
    }, [countries.length]);

    const handleCountrySelect = country => {
        setSelectedCountry(country)
    }
    return (<div>
        <Select options={countries} onChange={handleCountrySelect} />
    </div>)
}

// Helper Functions
const mapCountryData = (countries) => {
    return countries.map(country => {
        return { label: country.name, value: country.iso2 };
    })
}
export default Selector