import { atom } from 'recoil';

// Atoms
export const selectedCountryStore = atom({
    key: 'selectedCountry',
    default: null
})

export const canvasNewsStore = atom({
    key: 'canvasNews',
    default: null
})