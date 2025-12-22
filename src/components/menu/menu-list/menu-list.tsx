import React from 'react'
import { useStyles } from './menu-list-styles';

const MenuList = ({children}: React.HTMLAttributes<HTMLUListElement>) => {
    const styles = useStyles();
    return (
     <nav>
        <ul className={styles.navegacao}>{children}</ul>
     </nav>
    );
};

export default MenuList;