import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './components/requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      {/* Navbanner */}
      <Nav />
      <Banner />
      
      <Row 
      title="Netflix ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow
      />
      <Row 
      title="Amazon ORIGINALS" 
      fetchUrl={requests.fetchAmanzonOriginals} 
      isLargeRow
      />
      <Row 
      title="Disney ORIGINALS" 
      fetchUrl={requests.fetchDisneyOriginals} 
      isLargeRow
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
     
     
    </div>
  );
}

export default App;
