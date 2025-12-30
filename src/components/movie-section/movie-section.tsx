import { useStyles } from './movie-section-styles';
import Fieldset from '../fieldset/fieldset';
import InputText from '../input-text/input-text';
import Button from '../button/button';
import { FaSearch } from 'react-icons/fa';
import MovieList from '../movie-list/movie-list';
import useFetchMovies from '../../hooks/useFetchMovies';


function MovieSection() {
  const styles = useStyles();

  const { movies, loading, error } = useFetchMovies();

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