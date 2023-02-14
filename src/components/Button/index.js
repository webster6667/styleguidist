import React from 'react';
import PropTypes from 'prop-types'
import './button.scss';

/**
 * Button Component
 **/
const Button = ({ title, ...props }) => {
  return <button className='button' {...props} >{title}</button>;
};

Button.propTypes = {
  /**
   * Button label
   */
  title: PropTypes.string.isRequired,
};

export default Button;
