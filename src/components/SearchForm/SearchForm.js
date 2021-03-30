import React, { useState } from 'react'
import css from './SearchForm.module.css'

function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ keyword })
    }

    const handleChange = (event) => {
        setKeyword(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className={css["c-search"]}>
            <button className={css["c-search-btn"]}>Buscar</button>
            <input className={css["c-search-input"]} placeholder="Search a gif here..." type="text" value={keyword} onChange={handleChange} required />
        </form>
    )
}

export default React.memo(SearchForm)