import React from 'react';
import { MapPropsToStyles } from 'helper/MapPropsToStyles';

import styles from 'atoms/button/Button.module.scss';

export interface Props {
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onClickStyle?: string;
  clicked?: boolean;
  onChange?: React.FormEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({
  type,
  className,
  label,
  onClick,
  onClickStyle,
  clicked,
  onChange
}) => {
  const styleButton = {};
  const classes = MapPropsToStyles(styles, className);
  const onClickClasses = MapPropsToStyles(styles, onClickStyle);

  return (
    <button
      type={type}
      style={styleButton}
      onClick={onClick}
      onChange={onChange}
      className={clicked ? onClickClasses : classes}>
      <h6>{label || 'Button'}</h6>
    </button>
  );
};

export default Button;
