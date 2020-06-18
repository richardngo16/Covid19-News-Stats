import React, { useState, useEffect } from "react";
import { useRecoilValue } from 'recoil';
import { selectedCountryStore } from '../stores/Store'
import { ENDPOINT } from '../utils/constants'

function Canvas() {
    const country = useRecoilValue(selectedCountryStore)
    const [pageData, setPageData] = useState(null)
    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(`${ENDPOINT.COUNTRIES}/${country.value}`)
            const data = await response.json()
            setPageData(data)
        }
        if (country) {
            fetchCountryData()
        }
    }, [country])
    return (<div>
        Hello World
        {pageData && JSON.stringify(pageData)}
    </div>)
}

export default Canvas