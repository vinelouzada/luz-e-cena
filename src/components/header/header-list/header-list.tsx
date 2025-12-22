import React from 'react'
import { useStyles } from '../header-styles';

interface HeaderListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
}

const HeaderList = ({ children, ...rest }: HeaderListProps) => {
  const styles = useStyles();
  return (
    <ul 
        {...rest}
        className={styles.cabecalho}
    > 
        { children } 
    </ul>
  );
}

export default HeaderList