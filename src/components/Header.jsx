export default function Header(props) {
  return (
    <header className="Header">
      <h1>Welcome to Popcorn</h1>
      <h2>We currently have {props.numOfMovies} Movies available</h2>
    </header>
  );
}
