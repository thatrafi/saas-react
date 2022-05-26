import React from 'react';
import styles from 'atoms/input/Input.module.scss';
import { MapPropsToStyles } from 'helper/MapPropsToStyles';

type Props = {
  type?: 'text' | 'email' | 'number' | 'password' | 'date';
  name: string;
  value?: any;
  placeholder: string;
  className: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLInputElement>;
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ type, name, value, placeholder, className, onChange, onClick }, ref) => {
    const classes = MapPropsToStyles(styles, className);

    return (
      <input
        type={type || 'text'}
        name={name}
        value={value}
        placeholder={placeholder}
        className={classes}
        onChange={onChange}
        onClick={onClick}
        ref={ref}
        data-testid="inputComp"
      />
    );
  }
);

export default Input;
