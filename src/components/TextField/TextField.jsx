import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import {
  Input,
  InputContainer,
  Label,
  HelperText,
  ToggleVisibility,
} from './TextField.styles';

const hasValue = value => value && value.length > 0;

const colors = {
  light: {
    main: '#444444',
    focus: '#ec584c',
    labelBackground: '#fff',
  },
  dark: {
    main: '#fff',
    focus: '#ec584c',
    labelBackground: '#30283d',
  },
};

const TextField = ({
  value,
  onChange,
  label,
  helperText,
  marginBottom,
  type,
  mode,
}) => {
  const [focused, setFocused] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (type !== inputType) {
      setInputType(type);
    }
  }, [type]);

  const theme = colors[mode];

  const toggleVisible = () => {
    const newType = inputType === 'password' ? 'text' : 'password';
    setInputType(newType);
  };

  return (
    <ThemeProvider theme={theme}>
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
          mode={mode}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {helperText && <HelperText>{helperText}</HelperText>}
      </InputContainer>
    </ThemeProvider>
  );
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  marginBottom: PropTypes.number,
  type: PropTypes.string,
  mode: PropTypes.oneOf(['dark', 'light']),
};

TextField.defaultProps = {
  onChange: () => null,
  label: null,
  helperText: null,
  marginBottom: null,
  type: 'text',
  mode: 'dark',
};

export default TextField;
