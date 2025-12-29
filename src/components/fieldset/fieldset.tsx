import React from 'react';
import { useStyles } from './fieldset-styles';

interface FieldsetProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  variant: 'primary' | 'secondary';
}

function Fieldset({ variant = 'primary', children}: FieldsetProps) {
  const styles = useStyles();

  return (
    <fieldset
      className={`${styles.inputWrapper} ${
        variant === 'primary' ? styles.primary : styles.secondary
      }`}
    >
      {children}
    </fieldset>
  );
}

export default Fieldset;
