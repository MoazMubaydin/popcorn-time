import Header from "./components/Header";
import movies from "./data/movies.json";
import Footer from "./components/Footer";
import { useState } from "react";

import MovieList from "./components/MovieList";
function App() {
  const [displayMovie, setDisplayMoive] = useState(movies);
  const deleteMovie = (id) => {
    console.log("deleting a movie");

    setDisplayMoive(
      displayMovie.filter((movie) => {
        return movie.id !== id;
      })
    );
  };
  return (
    <>
      <Header numOfMovies={displayMovie.length} />
      <MovieList displayMovie={displayMovie} deleteMovie={deleteMovie} />
      <Footer />
    </>
  );
}

export default App;
