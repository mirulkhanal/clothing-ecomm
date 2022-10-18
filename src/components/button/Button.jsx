import React from 'react';
import './button.scss';

const BUTTON_TYPES={
  google:"google",
 inverted:"inverted"
}
const Button = ({ children,buttonType, ...rest }) => {
  return <button className={`button-container ${BUTTON_TYPES[buttonType]}`}{...rest}>{children}</button>;
};

export default Button;
