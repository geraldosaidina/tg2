import PropTypes from "prop-types";

const MovieCard = ({ movie }) => {
  const movieLink = `https://www.imdb.com/title/${movie.imdbID}`;
  const movieImage = movie.Poster ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image";
  const movieTitle = movie.Title ? movie.Title : "Título não disponível";
  const movieYear = movie.Year ? `(${movie.Year})` : "";

  return (
    <div className="card h-100">
      <a href={movieLink} target="_blank" rel="noopener noreferrer">
        <img
          src={movieImage}
          className="card-img-top"
          alt={movieTitle}
          style={{ height: "400px", objectFit: "cover" }}
        />
      </a>
      <div className="card-body">
        <h5 className="card-title">{movieTitle} {movieYear}</h5>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Poster: PropTypes.string,
      Year: PropTypes.string,
    }).isRequired,
  };

export default MovieCard;
