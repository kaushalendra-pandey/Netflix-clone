import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./Request";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_Url = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchURL, isLarge }) => {
  const [movies, setMovie] = useState([]);
  const [trailerURL, settrailerURL] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390px",
    width: "100%",
    playVars: {
      autoPlay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log(movie);
    if (trailerURL) {
      settrailerURL("");
    } else {
      movieTrailer(movie?.name || "")
        .then(url => {
          const URLparam = new URLSearchParams(new URL(url).search);
          console.log(URLparam.get("v"));
          settrailerURL(URLparam.get("v"));
        })
        .catch((error) => {
          console.log("in");
          console.log(error);
        });
    }
  };

  return (
    <div className="row">
      <h2> {title} </h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLarge && "row_posterLarge"}`}
            src={`${base_Url}${movie.poster_path}`}
            alt={movie.name}
          ></img>
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
