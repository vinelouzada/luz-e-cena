import React from 'react'
import { useStyles } from './selector-group-styles';

interface SelectorGroupProps extends React.HTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const SelectorGroup = ({ children, icon, ...rest }: SelectorGroupProps) => {
  const styles = useStyles();
  return (
    <div className={ styles.container }>
        {icon && <div className={ styles.icone }>{icon}</div>}
        <select {...rest} className={ styles.selector }>
            {children}
        </select>
    </div>
  )
}

export default SelectorGroup