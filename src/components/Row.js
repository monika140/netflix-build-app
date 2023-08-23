import React, { useEffect, useState } from "react";
import "./Row.css";
import instance from "../axios";
import endpoints from "./Requests";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovie] = useState([]);
  //This defines a React functional component named Row. It takes three props: title, fetchUrl, and isLargeRow. The isLargeRow prop has a default value of false if not provided.
  const base_url = "https://image.tmdb.org/t/p/original/";

  const dataFetech = async () => {
    let response = await instance("GET", endpoints.fetchComedyMovies);

    setMovie(response && response.results); //bcz of error  aarhe the results me ,operators use kre
    console.log("Row data is coming here ===>", response);
    // setMovie(fetchUrl && fetchUrl.results);//bcz of error  aarhe the results me ,operators use kre
    // console.log(fetchUrl);
  };
  //This defines an async func. dataFetch. It seems to fetch data using an instance function with a "GET" request method and a URL provided by endpoints.fetchUrl. After fetching, it updates the movies state with the fetched data's results property.

  useEffect(() => {
    dataFetech();
  }, []);
  //This uses the useEffect hook to execute the dataFetch function when the component mounts or when the fetchUrl prop changes. This implies that whenever the fetchUrl prop changes, a new data fetch operation will be triggered.
  console.log("hello", movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies && //operators use kre the bcz error show ho rhe the
          movies.map(
            (movie) => (
              //(isLargeRow && movie.poster_path) ||
              //(!isLargeRow && movie.backdrop_path && (
                <img
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path //yaha prob hai yaha posters p image show nhi ho rhi haii
                  }`}
                  alt={movie.name}
                />
              )

            // the movies state is mapped using the map function. For each movie in the movies array, an <img> element is rendered.
          )}
      </div>
    </div>
  );
}

export default Row;
