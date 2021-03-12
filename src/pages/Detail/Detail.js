import React, { useContext } from 'react'
import Gif from 'components/Gif/Gif'
import GifsContext from 'context/GifsContext'

const Detail = ({ params }) => {

    const { gifs } = useContext(GifsContext);
    const gif = gifs.find(singleGif => singleGif.id === params.id);

    return <>
        <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif} />
    </>
}

export default Detail