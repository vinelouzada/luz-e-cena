import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    button: {
      padding: 'var(--padding-s)',
      fontFamily: 'var(--fonte-texto)',
      fontSize: 'var(--font-size-s)',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
    },

    default: {
      color: 'var(--branco)',
      backgroundColor: 'var(--cinza-escuro)',
    },

    icon: {
      background: 'none',
      fontSize: 'var(--font-size-l)',
      border: 'none',
      padding: '0.5rem',
      color: '#333',
    },
  })
);
