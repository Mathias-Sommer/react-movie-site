import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState();

  const movies = [
    { id: 1, title: "Film1", release_date: "2020" },
    { id: 1, title: "Film2", release_date: "2020" },
    { id: 1, title: "Film3", release_date: "2020" },
    { id: 1, title: "Film4", release_date: "2020" },
    { id: 1, title: "Film5", release_date: "2020" },
  ];

  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies .."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
