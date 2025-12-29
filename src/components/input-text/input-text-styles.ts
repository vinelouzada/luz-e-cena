import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => createStyles({
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    color: 'var(--preto)',
    fontFamily: 'var(--fonte-texto)',
    fontSize: 'var(--font-size-m)',
  },
}));
