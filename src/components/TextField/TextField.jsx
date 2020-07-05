import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  InputContainer,
  Label,
  HelperText,
  ToggleVisibility,
} from './TextField.styles';

const hasValue = value => value && value.length > 0;

const TextField = ({
  value,
  onChange,
  label,
  helperText,
  marginBottom,
  type,
}) => {
  const [focused, setFocused] = useState(false);
  const [inputType, setInputType] = useState(type);

  const toggleVisible = () => {
    const newType = inputType === 'password' ? 'text' : 'password';
    setInputType(newType);
  };

  return (
    <InputContainer marginBottom={marginBottom}>
      <Label focused={focused} hasValue={hasValue(value)}>
        {label}
      </Label>
      {type === 'password' && (
        <ToggleVisibility
          visible={inputType === 'text'}
          onClick={toggleVisible}
        />
      )}
      <Input
        value={value}
        onChange={onChange}
        type={inputType}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {helperText && <HelperText>{helperText}</HelperText>}
    </InputContainer>
  );
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  marginBottom: PropTypes.number,
  type: PropTypes.string,
};

TextField.defaultProps = {
  onChange: () => null,
  label: null,
  helperText: null,
  marginBottom: null,
  type: 'text',
};

export default TextField;
