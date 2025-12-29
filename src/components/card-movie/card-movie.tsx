import { useStyles } from './card-movie-styles';
import Tag from '../tag/tag';
import type { Movie } from '../../types';


function CardMovie(props: Movie) {
    const styles = useStyles();
    const { alt, src, titulo, genero, categoria, censura, duracao } = props;
    return (
      <li className={styles.card}>
        <img src={src} alt={alt} />
        <div className={styles.container}>
          <h3>{titulo}</h3>
          <div className={styles.informacoes}>
            <div className={styles.linha1}>
              <p>{genero}</p>
              <Tag value={categoria} />
            </div>
            <div className={styles.linha2}>
              <p>{duracao}</p>
              <Tag value={censura} />
            </div>
          </div>
        </div>
      </li>
    );
}

export default CardMovie
