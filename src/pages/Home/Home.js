import React, { useState } from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from "../../components/ListOfGifs";
import Category from '../../components/Category/Category'
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
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
                <Category
                    className="App-category"
                    name="Categorias populares"
                    options={POPULAR_GIFS}
                />
            </div>
        </>
    )
}

export default Home