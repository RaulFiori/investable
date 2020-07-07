import React from 'react';
import PropTypes from 'prop-types';
import { SwitchBase, Ball } from './Switch.styles';

const Switch = ({ checked, onChange }) => {
  return (
    <SwitchBase checked={checked} onClick={onChange}>
      <Ball />
    </SwitchBase>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  checked: false,
  onChange: () => null,
};

export default Switch;
