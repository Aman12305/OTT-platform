import React, { useCallback, useEffect, useState } from 'react';
import requests from './requests';
import axios from 'axios';
import '../css/Nav.css';

function Nav({ setDesmovies }) {
    const [show, handleShow] = useState(false);
    const [searchvalue, setSearchvalue] = useState("");
    // const [movies, setMovies] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        // return () => {
        //     window.removeEventListener("scroll","null");
        // };
    }, []);

    const handleChange = (e) => {
        setSearchvalue(e.target.value);
    }

    const handleKeyup = (e) => {
        if(e.keyCode === 13){
            handleClick();
        }
    };

    const handleClick = useCallback(() => { 
        setSearchvalue("");
        setDesmovies("");
        const fetchurl = `${requests.fetchSearch}${encodeURI(searchvalue)}`;

        axios.get(fetchurl).then((res=>{
            
        //  console.log(res.data.results,searchvalue);

         if(res.data.results.length !== 0)
         setDesmovies(res.data.results[0]);
         else{
                alert("No results found");
         }

        })).catch((err=>console.log(err.message)));
    },[searchvalue,setDesmovies]);



    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://imgur.com/2aMx6CO.jpg" alt="Netflix Logo"/>
            <div className='navsearch'>
                <input className="navsearch__input" type="text" placeholder="Search" onChange={handleChange} value={searchvalue} onKeyUp={handleKeyup}/>
                <svg className="search_icon" onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
            </div>
            {/* <div className="search_menu">
            </div> */}
            <img className="nav__avatar" src="https://imgur.com/lUJ1ZKi.jpg" alt="Netflix Avatar"/>
        </div>
    )
}

export default Nav