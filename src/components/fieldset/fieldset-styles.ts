import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    inputWrapper: {
      width: '40vw',
      height: '3rem',
      padding: 'var(--padding-xs) var(--padding-s)',
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',

      '&::placeholder': {
        color: 'var(--preto)',
        fontFamily: 'var(--fonte-texto)',
        fontSize: 'var(--font-size-m)',
      },
    },

    primary: {
      border: '3px solid var(--cinza-escuro)',
      backgroundColor: 'var(--cor-de-fundo-newsletter)',
    },

    secondary: {
      border: '3px solid var(--border-color)',
      backgroundColor: 'transparent',
    },
  })
);
