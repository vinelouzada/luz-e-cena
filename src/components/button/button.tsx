import type React from 'react';
import classNames from 'classnames';
import { useStyles } from './button-styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'icon';
}

const Button = ({ children, variant = 'default', ...rest }: ButtonProps) => {
  const styles = useStyles();

  return (
    <button
      {...rest}
      className={classNames(styles.button, styles[variant])}
    >
      {children}
    </button>
  );
};

export default Button;
