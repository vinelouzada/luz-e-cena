import {createStyles, makeStyles} from '@mui/styles';

export const useStyles = makeStyles(() => createStyles({
    link: {
        color: 'var(--preto)',
        textDecoration: 'none',
    },
    linkHover: {
        transform: 'scale(1.1)',
    }
}));
