import { useStyles } from './banner-styles';

interface BannerProps {
    src: string;
    alt: string;
}

const Banner = ({ src, alt }: BannerProps) => {
    const classes = useStyles();
    return <img src={src} alt={alt} className={classes.banner} />;
};

export default Banner;