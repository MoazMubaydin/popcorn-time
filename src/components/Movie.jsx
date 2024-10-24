export default function Movie({ movieDetails, deleteFunc }) {
  return (
    <div key={movieDetails.id} className="card">
      <img src={movieDetails.imgURL} />
      <h3>{movieDetails.title}</h3>
      <p>Year: {movieDetails.year}</p>
      <p>Rating: {movieDetails.rating}</p>
      <button
        onClick={() => {
          deleteFunc(movieDetails.id);
        }}
      >
        Delete this movie
      </button>
    </div>
  );
}
