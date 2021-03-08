import React, { useEffect, useState } from 'react'
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'
import getGifs from '../../services/getGifs'

const SearchResults = ({ params }) => {
    const { keyword } = params
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    return <>
        {loading
            ? <Spinner />
            : <ListOfGifs gifs={gifs} />
        }
    </>
}

export default SearchResults