import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      position: 'relative',
      display: 'inline-block',
    },

    icone: {
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 'var(--font-size-l)',
    },

    selector: {
      width: 312,
      height: 51,
      padding: 16,
      appearance: 'none',
      border: 'none',
      borderRadius: 8,
      outline: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--fonte-texto)',
      backgroundColor: 'var(--cinza-claro)',
      color: 'var(--preto)',
    },

    selectorGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-s)',
    },
  })
);
