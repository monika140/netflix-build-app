import React from "react";
import "./HomeScreen.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";
import endpoints from "../components/Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={endpoints.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={endpoints.fetchTrendingNow} />

      <Row title="Top Rated" fetchURL={endpoints.fetchTopRated} />

      <Row
        title="Action Movies"
        fetchURL={endpoints.fetchActionMovies}
        isLargeRow
      />
      <Row title="Comedy Movies" fetchURL={endpoints.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={endpoints.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={endpoints.fetchRomanceMovies} />
      <Row title="Documentries" fetchURL={endpoints.fetchDocumentries} />
    </div>
  );
}

export default HomeScreen;
