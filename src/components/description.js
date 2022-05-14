import React, {useState,useCallback, useEffect} from 'react';
import youtube from './youtube';
import "../css/Banner.css";
import movieTrailer from "movie-trailer";

const youtube_url = "https://www.youtube.com/embed/";


function Description ({desmovies , setDesmovies}) {

    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(()=>{
        setTrailerUrl("");
        movieTrailer(desmovies?.name || desmovies?.title,{tmdbId: desmovies?.id,apikey: "cca3ad1fd48f3b685ab9f13de8d466ec"})
            .then(url => {
                const urlParams= new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((err) => {

                youtube.get(`/search`, {
                    params: {
                        q: `${desmovies?.name || desmovies?.title} trailer`,
                        regionCode: `${desmovies?.origin_country}`,
                    }
                }).then(response => {
                    // console.log(response.data.items[0].id.videoId);
                    setTrailerUrl(response.data.items[0].id.videoId);
                }).catch(err => {
                    // console.log(err.message);
                })


            });

    },[desmovies.name, desmovies.title, desmovies.id, desmovies.origin_country]);


                
            const handleClick = useCallback(movie => {
                setDesmovies("");
            }, [setDesmovies]);

            function truncate(str,n){
                return str?.length>n ? str.substr(0,n-1)+ "..." : str;
            }


    return(
        <div >
        <header className="banner"
         style={{
             backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)),url(
            "https://image.tmdb.org/t/p/original/${desmovies?.backdrop_path}"
             )`
             
         }}
        >
            <svg className='icon' onClick={()=>handleClick("")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"/></svg>
            <div className="banner__contents">
                <h1 className="banner__title">
                {truncate(desmovies?.title || desmovies?.name,20)}
                </h1>
            {/* <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div> */}
            <h1 className="banner__description">
                {truncate (desmovies?.overview, 250)}
            </h1>
            </div>
            <div className="banner--fadeBottom"/>
        </header>
        <div className='row_youtube'> 
           
         <iframe title = {desmovies.name}frameBorder="0" allow = "accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" height="490" width="100%" src={`${youtube_url}${trailerUrl}?rel=0`} allowFullScreen ></iframe>
         
        
        </div>
       </div>
    )
}


export default Description;
