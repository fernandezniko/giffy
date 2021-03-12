import React, { useEffect, useState } from 'react'
import getTrendingSearches from 'services/getTrendingSearches'
import Category from 'components/Category/Category'

export default function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingSearches().then(setTrends)
    }, [])

    return <Category name='Tendencias' options={trends} />
}