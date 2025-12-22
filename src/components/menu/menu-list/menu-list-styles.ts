import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  navegacao: {
    display: 'flex',
    gap: 'var(--gap-xl)',
    fontFamily: 'var(--fonte-texto)',
    fontSize: 'var(--font-size-m)',
    fontWeight: 400,
    listStyle: 'none',
    paddingLeft: 0,
  },

  item: {
    listStyle: 'none',
  },

  link: {
    display: 'block',
  },
}));
