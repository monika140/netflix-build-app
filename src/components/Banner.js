import React, { useEffect, useState } from "react";
import "./Banner.css";
import instance from "../axios";
import endpoints from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  // const accountFetech = async () => {
  //   // endpoints
  //   let data = await instance('GET', "account/null")

  //   // do Changes as per your requirements.
  //   console.log("Here we go ===>", movie);
  // }
  const accountFetech = async () => {
    // endpoints
    let fetchTopRated = await instance("GET", endpoints.fetchTopRated);
    setMovie(
      fetchTopRated.results[
        Math.floor(Math.random() * fetchTopRated.results.length - 1)
      ]
    );
    // do Changes as per your requirements.
    //console.log("Here we go ===>", fetchTopRated);
  };
  useEffect(() => {
    accountFetech();
    //Demo()
  }, []);

  //console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "...." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          `url("https://img.freepik.com/premium-vector/abstract-modern-dark-banner-background-with-rainbow-colorful-line_105555-115.jpg")`,
        // backgroundImage: `url("https://image.tmbd.org/t/p/originals/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">MyList</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeButtom" />
    </header>
  );
}

export default Banner;
