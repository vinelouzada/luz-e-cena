import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 'var(--margin-xl) 0',
      maxWidth: 1200,
    },

    titulo: {
      color: 'var(--preto)',
      fontFamily: 'var(--fonte-titulo)',
      fontSize: 'var(--font-size-xl)',
      alignSelf: 'flex-start',
    },
  })
);
