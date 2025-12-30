import { useStyles } from './movie-section-styles';
import Fieldset from '../fieldset/fieldset';
import InputText from '../input-text/input-text';
import Button from '../button/button';
import { FaSearch } from 'react-icons/fa';
import MovieList from '../movie-list/movie-list';
import useFetchMovies from '../../hooks/useFetchMovies';
import useFilterMovies from '../../hooks/useFilterMovies';

function MovieSection() {
  const styles = useStyles();

  const { movies, loading, error } = useFetchMovies();
  const { filteredMovies, search, setSearch, handleSearch } = useFilterMovies(movies);


  return (
    <main>
        <section className={styles.container}>
            <Fieldset variant='secondary'>
                <InputText value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Buscar filme...' />
                <Button variant='icon' onClick={handleSearch}>
                    <FaSearch />
                </Button>
            </Fieldset>
            <h1 className={styles.titulo}>Filmes</h1> 
            {loading && <p>Carregando...</p>}       
            {error && <p className={styles.error}>{error}</p>}
           <MovieList movies={filteredMovies}/>
        </section>
    </main>
  )
}

export default MovieSection