import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetchMovieHandler()
    },[]);

    const addMovieHandler = async (movie) => {
        const response = await fetch('https://react-http-a3d43-default-rtdb.firebaseio.com/movies.json', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async function fetchMovieHandler(){
        setIsLoading(true);
        setError(null);
        
        try{
            const response = await fetch('https://react-http-a3d43-default-rtdb.firebaseio.com/movies.json');

            if(!response.ok){
                throw new Error('Something went wrong!')
            }

            const data = await response.json();

            const loadedMovies = [];
            for (let key in data){
                loadedMovies.push({
                    id: data[key],
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate
                })
            }
            setMovies(loadedMovies);
        }catch(error){
            setError(error.message)
        }
        setIsLoading(false);

    }
  return (
    <>
        <div className="container text-center">
            <AddMovie onAddData={addMovieHandler} />
            <div className='mb-4'>
                <button className="btn btn-primary" onClick={fetchMovieHandler}>Fetch Movies</button>
            </div>
            <div className="row">
                {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
                {!isLoading && movies.length === 0 && !error && <p>No movies found</p>}
                {!isLoading && error && <p>{error}</p>}
                {isLoading && <p>Loading...</p>}
            </div>
        </div>
    </>
  )
}

export default Movies



    // function fetchMovieHandler(){
    //     fetch('https://swapi.dev/api/films').then(response => {
    //         return response.json()
    //     }).then(data => {
    //         const updatedData = data.results.map(movieData => {
    //             return {
    //                 id: movieData.episode_id,
    //                 title: movieData.title,
    //                 openingText: movieData.opening_crawl,
    //                 releaseDate: movieData.release_date
    //             }
    //         });
    //         setMovies(updatedData)
    //     })
    // }

    // OR