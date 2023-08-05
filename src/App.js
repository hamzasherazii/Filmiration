import React from 'react';
import { useEffect } from 'react';

// omdbapi.com API key ccff4200

const API_URL = 'https://www.omdbapi.com?apikey=ccff4200';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman')

    }, [])
    return(
        <h1>Hello World</h1>
    );
}

export default App;