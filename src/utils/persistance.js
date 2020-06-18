import localForage from 'localforage'

export const writeToStorage = (key, value) => {
    return localForage.setItem(key, value)
}

export const retrieveFromStorage = (key) => {
    return localForage.getItem(key)
}