import { useStyles } from './movie-list-styles';
import CardMovie from '../card-movie/card-movie';
import type { Movie } from '../../types';

interface MovieListProps {
    movies: Movie[];
}

function MovieList({movies}: MovieListProps) {
    const styles = useStyles();
    return (
        <ul className={styles.lista}>
            {movies.map((movie) => (
                <CardMovie key={movie.id} {...movie} />
            ))}
        </ul>
    )
}

export default MovieList;