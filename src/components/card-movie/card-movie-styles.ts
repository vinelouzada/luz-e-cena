import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    card: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '32%',
      maxWidth: '17em',
      width: '100%',
      height: '100%',
      boxShadow: 'var(--box-shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
    },

    cardImage: {
      width: '100%',
      objectFit: 'cover',
    },

    container: {
      padding: 'var(--padding-s)',
      fontFamily: 'var(--fonte-texto)',
      flexGrow: 1,
      display: 'flex',
      gap: 30,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    title: {
      fontSize: 'var(--font-size-s)',
    },

    informacoes: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-xs)',
    },

    linha1: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    linha2: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  })
);
