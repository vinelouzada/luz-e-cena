import { useState, useEffect } from 'react'
import type { Movie } from '../types';
import { getMovies } from '../api';

function useFetchMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
          const response = await getMovies();
          setMovies(response);
      } catch (error) {
          setError('Erro ao buscar filmes');
          console.error('Erro ao buscar filmes:', error);
      } finally {
          setLoading(false);
      }
    }
  
    useEffect(() => {
      fetchMovies();
    }, []);
    
    return { movies, loading, error };
}

export default useFetchMovies