import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    lista: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--gap-m)',
      listStyleType: 'none',
      marginBottom: 'var(--margin-xxl)',
      justifyContent: 'space-around',
      paddingLeft: 0,
    },
  })
);
