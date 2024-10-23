import movies from "../data/movies.json"
import { useState } from "react";

export default function MovieList() {
    const [displayMovie, setDisplayMoive] = useState(movies);

    const deleteMovie = (id) => {

        console.log("deleting a movie")

        setDisplayMoive(displayMovie.filter((movie) => {
            return movie.id !== id
        }))
    }
    return (
        <section className="MovieList">
            <h2>We currently have {displayMovie.length} Movies available</h2>

            {displayMovie.map((movieObj) => {
                return (

                    <div key={movieObj.id} className="card">
                        <img src={movieObj.imgURL} />
                        <h3>{movieObj.title}</h3>
                        <p>Year: {movieObj.year}</p>
                        <p>Rating: {movieObj.rating}</p>
                        <button onClick={() => {
                            deleteMovie(movieObj.id)
                        }} >Delete this movie</button>
                    </div>

                )
            })}
        </section >
    );
}