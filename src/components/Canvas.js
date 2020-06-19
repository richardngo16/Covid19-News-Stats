import React from "react";
import { useRecoilValue } from 'recoil';
import { selectedCountryStore } from '../stores/Store'
import { ENDPOINT } from '../utils/constants'

function Canvas() {
    const country = useRecoilValue(selectedCountryStore)
    return (<div>
        {country && <img alt="og_image" src={`${ENDPOINT.COUNTRIES}/${country.value}/og`} />}
    </div>)
}

export default Canvas