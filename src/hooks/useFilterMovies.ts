import type { Movie } from "../types";
import { useState, useEffect } from "react";

function useFilterMovies(movies: Movie[]) {
    const [search, setSearch] = useState('');
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  
    useEffect(() => {
      setFilteredMovies(movies);
    }, [movies]);
  
    const handleSearch = () => {
      const filtered = movies.filter(movie =>
        movie.titulo.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMovies(filtered);
    };
  
    return { filteredMovies, search, setSearch, handleSearch };
  }

export default useFilterMovies;