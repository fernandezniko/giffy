const fromApiResponseToGifs = apiResponse => {

    const { data } = apiResponse
    const { images, title, id } = data
    const { url } = images.downsized_medium
    return { title, id, url }
}

export default function getSingleGif({ id }) {

    return fetch(`${process.env.REACT_APP_API_URL}/gifs/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}