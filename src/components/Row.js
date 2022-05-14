import React, { useState, useEffect, useCallback } from 'react';
import axios from './axios';
import '../css/Row.css'; 
// import { setDesmovies } from './setmovie';


const base_url ="https://image.tmdb.org/t/p/original/";

function Row({ id,title, fetchUrl, isLargeRow , setDesmovies}) {

    const [movies, setMovies] = useState([]);
    // const [trailerUrl, setTrailerUrl] = useState("");
    // A snippet of code which rune based on a specific conditions
    useEffect(() => {
        // if [], run once when the row loads, and dont run that again
    async function fetchData() {
        const request= await axios.get(fetchUrl);
        
        setMovies(request.data.results);
        return request;
    }
    fetchData();
    }, [fetchUrl]);

    // console.log(movies);

    const handleClick = useCallback(movie => {
            // console.log(movie);
            setDesmovies(movie);
        }, [setDesmovies]);

        function truncate(str,n){
            return str?.length>n ? str.substr(0,n-1)+ "..." : str;
        }
      

    return(
        <div className="row" id={id}>
            <h2>{title}</h2>
                <div className="row__posters">
                    {/* row__poster */}
                    {movies.map(movie => (
                        <div className={`row__poster ${isLargeRow && "row__posterLarge"}`}>
                             <img 
                                key={movie.id}
                                id={movie.id}
                                onClick={()=> handleClick(movie)}
                                className= {`row__poster ${isLargeRow && "row__posterLarge"}`}
                                src={`${base_url}${movie.backdrop_path}`} alt={movie.name}/>
                                <h2 className='row_title'>{truncate(movie?.name || movie?.title,20) }</h2>
                        </div>
                    ))}
                    {/* posters */}
                </div>
                
                
            </div>

    )
}

export default Row;



 // movieTrailer(movie?.name || movie?.original_title || movie?.title || movie?.original_name,{tmdbId: movie?.id,apikey: "cca3ad1fd48f3b685ab9f13de8d466ec"})
            // .then(url => {
            //     const urlParams= new URLSearchParams(new URL(url).search);
            //     // console.log(` this is url ${urlParams}`);
            //     setTrailerUrl(urlParams.get('v'));
            // }).catch(
            //     async (err) => {
            //         const response = await youtube.get(`/search`, {
            //             params: {
            //                 q: `${movie?.name || movie?.original_title || movie?.title || movie?.original_name} trailer`,
            //             }
            //         });
                    
            //         setTrailerUrl(response.data.items[0].id.videoId);
            //         const position = document.getElementById(movie.id).getBoundingClientRect();
            //         console.log(window.scrollY,position);
            //         window.scrollTo(0, position.top + window.scrollY-100);
        
            //     }
            // ) ;