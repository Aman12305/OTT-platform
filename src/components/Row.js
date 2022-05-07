import React, { useState, useEffect } from 'react';
import axios from './axios';
import '../css/Row.css'; 
import youtube from './youtube';
import movieTrailer from "movie-trailer";

const base_url ="https://image.tmdb.org/t/p/original/";
const youtube_url = "https://www.youtube.com/embed/";

function Row({  title, fetchUrl, isLargeRow }){

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
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

    const handleClick= (movie) => {
        console.log(movie);
       
            movieTrailer(movie?.name || movie?.original_title || movie?.title || movie?.original_name,{tmdbId: movie?.id,apikey: "cca3ad1fd48f3b685ab9f13de8d466ec"})
            .then(url => {
                const urlParams= new URLSearchParams(new URL(url).search);
                // console.log(` this is url ${urlParams}`);
                setTrailerUrl(urlParams.get('v'));
            }).catch(
                async (err) => {
                    const response = await youtube.get(`/search`, {
                        params: {
                            q: movie?.name || movie?.original_title || movie?.title || movie?.original_name,
                        }
                    });
                    
                    setTrailerUrl(response.data.items[0].id.videoId);
        
                }
            ) ;
        };

        function truncate(str,n){
            return str?.length>n ? str.substr(0,n-1)+ "..." : str;
        }
      

    return(
        <div className="row">
            <h2>{title}</h2>
                <div className="row__posters">
                    {/* row__poster */}
                    {movies.map(movie => (
                        <div className={`row__poster ${isLargeRow && "row__posterLarge"}`}>
                             <img 
                                key={movie.id}
                                onClick={() => handleClick(movie)}
                                className= {`row__poster ${isLargeRow && "row__posterLarge"}`}
                                src={`${base_url}${movie.backdrop_path}`} alt={movie.name}/>
                                <h2 className='row_title'>{truncate(movie?.name || movie?.name || movie?.original_title || movie?.title || movie?.original_name,20) }</h2>
                        </div>
                    ))}
                    {/* posters */}
                </div>
                <div className='row_youtube'>
                {trailerUrl && <iframe frameBorder="0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" height="390" width="70%" src={`${youtube_url}${trailerUrl}`} allowFullScreen ></iframe>}
                {trailerUrl && <svg className='icon' onClick={()=>setTrailerUrl("")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"/></svg>}
                </div>
                
            </div>

    )
}

export default Row