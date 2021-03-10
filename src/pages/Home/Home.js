import React, { useState } from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";

const POPULAR_GIFS = ["Matrix", "Argentina", "Perros", "Gatos"]

const Home = () => {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation(); //useHistory in react router
    const { loading, gifs } = useGifs();

    const handleSubmit = (event) => {
        event.preventDefault();
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = (event) => {
        setKeyword(event.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search a gif here..." type="text" value={keyword} onChange={handleChange} />
                <button>Buscar</button>
            </form>
            <h3 className="App.title">Última Busqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className="App-title">Los gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home