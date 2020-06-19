export const STORAGE_CONSTANTS = {
    COUNTRIES: 'countries'
}

export const ENDPOINT = {
    COUNTRIES: 'https://covid19.mathdro.id/api/countries',
    NEWS: `https://newsapi.org/v2/top-headlines?q=COVID&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
}
