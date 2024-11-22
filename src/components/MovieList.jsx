
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="alert alert-warning text-center" role="alert">
        Nenhum filme encontrado.
      </div>
    );
  }

  return (
    <div className="row">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="col-md-4 col-sm-6 mb-4">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        imdbID: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Poster: PropTypes.string,
        Year: PropTypes.string,
      })
    ).isRequired,
  };

export default MovieList;
