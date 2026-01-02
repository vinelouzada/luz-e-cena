import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    rodape: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '252px',
      backgroundColor: 'var(--preto)',
    },

    rodape_informacoes: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      gap: 'var(--gap-xl)',
      height: '128px',
      color: 'var(--cinza-claro)',
    },

    logo: {
      width: '30%',
    },

    funcionamento: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-xs)',
      color: 'var(--cinza-claro)',
    },

    institucional: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-xs)',
      color: 'var(--cinza-claro)',
    },

    redes: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-xs)',
      color: 'var(--cinza-claro)',
    },

    titulo: {
      margin: 0,
      fontFamily: 'var(--fonte-titulo)',
      fontWeight: 400,
    },

    ancora: {
      color: 'var(--cinza-claro)',
      textDecoration: 'none',

      '&:hover': {
        color: 'var(--branco)',
        transform: 'scale(1.1)',
      },
    },

    icones: {
      display: 'flex',
      gap: 'var(--gap-xs)',
      color: 'var(--azul)',
      fontSize: 'var(--font-size-m)',
    },

    icone: {
      color: 'var(--azul)',
    },

    desenvolvimento: {
      padding: 'var(--padding-m) var(--padding-s)',
      backgroundColor: 'var(--cinza-claro)',
      color: 'var(--preto)',
      textAlign: 'center',
      fontFamily: 'var(--fonte-texto)',
      fontWeight: 400,
      fontSize: 'var(--font-size-m)',
    },
  })
);
