import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { useStyles } from './link-styles';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const Link = ({ children, ...rest }: LinkProps) => {
  const classes = useStyles();

  return (
    <a className={classes.link} {...rest}>
      {children}
    </a>
  );
};

export default Link;