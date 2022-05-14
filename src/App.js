import React, { useState } from 'react';
import './App.css';
import Row from './components/Row';
import requests from './components/requests';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Description from './components/description';



function App() {

  const [desmovies, setDesmovies] = useState("");

  return (
    <div className="App">
      {/* Navbanner */}
      <Nav setDesmovies={setDesmovies}/>
      {desmovies && <Description desmovies={desmovies} setDesmovies={setDesmovies}/>}
      {!desmovies && <Banner setDesmovies={setDesmovies}/>}
      
      {
      !desmovies &&
      <Row 
      id="row1"
      title="Netflix ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow
      setDesmovies={setDesmovies}
      />}

      {
      !desmovies &&
      <Row 
      id="row2"
      title="Amazon ORIGINALS" 
      fetchUrl={requests.fetchAmanzonOriginals} 
      isLargeRow
      setDesmovies={setDesmovies}
      />}
      
     { 
     !desmovies &&
     <Row 
      id="row3"
      title="Disney ORIGINALS" 
      fetchUrl={requests.fetchDisneyOriginals} 
      isLargeRow
      setDesmovies={setDesmovies}
      />}
      { !desmovies && <Row id="row4" title="Trending now" fetchUrl={requests.fetchTrending}  setDesmovies={setDesmovies}/>}
      {!desmovies && <Row id="row5" title="Top Rated" fetchUrl={requests.fetchTopRated} setDesmovies={setDesmovies} />}
      {!desmovies && <Row id="row6" title="Action Movies" fetchUrl={requests.fetchActionMovies} setDesmovies={setDesmovies} />}
      {!desmovies && <Row id="row7" title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} setDesmovies={setDesmovies} />}
      {!desmovies && <Row id="row8" title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} setDesmovies={setDesmovies} />}
      {!desmovies && <Row id="row9" title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} setDesmovies={setDesmovies} />}
     
     
    </div>
  );
}

export default App;
