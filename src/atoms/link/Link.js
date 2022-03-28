import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = (props) => {
  return <NavLink to={props.to}>{props.title}</NavLink>;
};

export default Link;
