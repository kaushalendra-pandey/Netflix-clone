// https://my-netflix-70f86.web.app/  firebase url

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import Request from "./Request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={Request.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Trending Now" fetchURL={Request.fetchTrending} />
      <Row title="Top Rated" fetchURL={Request.fetchTopRated} />
      <Row title="Action" fetchURL={Request.fetchActionMovies} />
      {/* <Row title="Comedy" fetchURL={Request.fetchComedyMovies} /> */}
      <Row title="Horror" fetchURL={Request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchURL={Request.fetchDocumentaries} />
    </div>
  );
}

export default App;
