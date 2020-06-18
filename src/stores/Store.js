import { atom } from 'recoil';

// Atoms
export const selectedCountryStore = atom({
    key: 'selectedCountry',
    default: null
})