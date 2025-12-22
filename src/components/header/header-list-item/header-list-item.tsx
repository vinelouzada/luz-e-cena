import React from 'react'
import { useStyles } from '../header-styles';

interface HeaderListItemProps extends React.HTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
}

const HeaderListItem = ({ children, ...rest }: HeaderListItemProps) => {
    const styles = useStyles();
    return (
        <li
            {...rest}
            className={styles.menuitem}
        >
            {children}
        </li>
    );
}

export default HeaderListItem;