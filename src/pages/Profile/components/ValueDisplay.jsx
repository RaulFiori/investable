import React from 'react';
import PropTypes from 'prop-types';
import { Label, Value } from './ValueDisplay.styles';

const ValueDisplay = ({ object, reference }) => {
  const { key, label, getValue } = reference;

  return (
    <>
      <Label>{label}:</Label>
      <Value>{getValue?.(object) || object[key]}</Value>
    </>
  );
};

ValueDisplay.propTypes = {
  object: PropTypes.shape({}).isRequired,
  reference: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    getValue: PropTypes.func,
  }).isRequired,
};

export default ValueDisplay;
