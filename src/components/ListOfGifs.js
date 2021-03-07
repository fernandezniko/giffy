import React, { useState, useEffect } from 'react'
import Gif from './Gif';
import getGifs from '../services/getGifs';

const ListOfGifs = ({ params }) => {
    const { keyword } = params
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword }).then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    }, [keyword])

    if (loading) return <i>Cargando </i>

    return (
        gifs.map(singleGif => {
            return <Gif
                key={singleGif.id}
                title={singleGif.title}
                id={singleGif.id}
                url={singleGif.url} />
        })
    )
}

export default ListOfGifs