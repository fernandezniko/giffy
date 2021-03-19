
const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse
    return data
}

export default function getTrendingSearches() {
    const apiURL = `${process.env.REACT_APP_API_URL}/trending/searches?api_key=${process.env.REACT_APP_API_KEY}`

    return fetch(apiURL)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}
