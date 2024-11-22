import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.collectapi.com/imdb/imdbSearchByName?query=avengers",
          {
            method: "GET",
            headers: {
              "content-type": "application/json",
              authorization: "apikey 3PHr5qGq337arQu1TXdLmT:68kY6OGU3D1xD9i7Oxzepp",
            },
          }
        );
        const data = await response.json();
        setMovies(data.result || []);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar os filmes:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">IMDB Movie Search: Avengers</h1>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
          <p>Carregando...</p>
        </div>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default App;
