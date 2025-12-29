import React from 'react';
import { useStyles } from './input-text-styles';

const InputText = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  const styles = useStyles();
  return (
    <div>
      <input {...props} className={styles.input} />
    </div>
  )
}

export default InputText