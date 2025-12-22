import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    cabecalho: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--gap-xl)',
      backgroundColor: 'var(--branco)',
      padding: 'var(--padding-s) 0',
    },

    menuitem: {
      listStyle: 'none',
    },

    icones: {
      display: 'flex',
      gap: 'var(--gap-xl)',
      fontFamily: 'var(--fonte-texto)',
      fontSize: 'var(--font-size-m)',
      fontWeight: 400,
    },
  })
);