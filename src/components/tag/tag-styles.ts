import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    tag: {
      padding: 'var(--padding-xs) var(--padding-s)',
      borderRadius: '0.5rem',
      fontSize: 'var(--font-size-s)',
      fontWeight: 400,
      textAlign: 'center',
      fontFamily: 'var(--fonte-texto)',
      color: 'var(--preto)',
    },

    doisD: {
      backgroundColor: 'var(--cinza-claro)',
    },

    tresD: {
      backgroundColor: 'var(--cinza-medio)',
    },

    livre: {
      backgroundColor: 'var(--verde)',
    },

    dez: {
      backgroundColor: 'var(--azul)',
    },

    doze: {
      backgroundColor: 'var(--amarelo)',
    },

    catorze: {
      backgroundColor: 'var(--coral)',
    },

    dezesseis: {
      backgroundColor: 'var(--vermelho)',
    },
  })
);
