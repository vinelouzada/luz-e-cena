import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    newsletter: {
      backgroundColor: 'var(--azul-claro)',
      padding: 'var(--padding-xxl) 0',
    },

    form: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--gap-s)',
    },

    titulo: {
      color: 'var(--preto)',
      fontFamily: 'var(--fonte-titulo)',
      fontSize: 'var(--font-size-l)',
      textAlign: 'center',
      marginBottom: 'var(--margin-l)',
    },

    error: {
      color: '#e63946',
      fontSize: 'var(--font-size-s)',
      marginTop: 'var(--margin-s)',
    },
  })
);
