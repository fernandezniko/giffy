import React, { useState } from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from "components/ListOfGifts/ListOfGifs";
import useGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches/LazyTrending";

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
                <button>Buscar</button>
                <input placeholder="Search a gif here..." type="text" value={keyword} onChange={handleChange} />
            </form>
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
                <div className="App-category">
                    <TrendingSearches />
                </div>

            </div>
        </>
    )
}

export default Home