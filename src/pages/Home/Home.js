import React, { useCallback } from "react"
import { useLocation } from "wouter"
import ListOfGifs from "components/ListOfGifts/ListOfGifs";
import useGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches/LazyTrending";
import SearchForm from "components/SearchForm/SearchForm";

const Home = () => {

    const [path, pushLocation] = useLocation(); //useHistory in react router
    const { loading, gifs } = useGifs();

    const handleSubmit = useCallback(({ keyword }) => {
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    return (
        <>
            <header className="o-header">
                <SearchForm onSubmit={handleSubmit} />
            </header>
            <div className="App-wrapper">
                <div className="App-main">
                    <div className="App-results">
                        <h3 className="App-title">Última búsqueda</h3>
                        <ListOfGifs gifs={gifs} />
                    </div>
                    <div className="App-category">
                        <TrendingSearches />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home