import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <section className="MovieList">
      {props.displayMovie.map((movieObj) => {
        return <Movie movieDetails={movieObj} deleteFunc={props.deleteMovie} />;
      })}
    </section>
  );
}
