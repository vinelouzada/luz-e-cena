import { useStyles } from './movie-section-styles';
import Fieldset from '../fieldset/fieldset';
import InputText from '../input-text/input-text';
import Button from '../button/button';
import { FaSearch } from 'react-icons/fa';
import MovieList from '../movie-list/movie-list';
import type { Movie } from '../../types';
import { getMovies } from '../../api';
import { useEffect, useState } from 'react';


function MovieSection() {
  const styles = useStyles();

  const [movies, setMovies] = useState<Movie[]>([]);
  
  const fetchMovies = async () => {
    try {
        const response = await getMovies();
        setMovies(response);
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  
  return (
    <main>
        <section className={styles.container}>
            <Fieldset variant='secondary'>
                <InputText placeholder='Buscar filme...' />
                <Button variant='icon'>
                    <FaSearch />
                </Button>
            </Fieldset>
            <h1 className={styles.titulo}>Filmes</h1>        
           <MovieList movies={movies}/>
        </section>
    </main>
  )
}

export default MovieSection