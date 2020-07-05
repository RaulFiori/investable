import styled, { css } from 'styled-components';
import Icon from '@mdi/react';
import { mdiEyeOff, mdiEye } from '@mdi/js';

export const Input = styled.input`
  border: 1px solid #ffffff;
  padding: 16px;
  width: calc(100% - 40px);

  background-color: transparent;
  border-radius: 4px;
  outline: none;

  font-family: Nunito;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.15px;
  color: #ffffff;
  opacity: 0.84;

  &:focus {
    border: 2px solid #ec584c;
  }
`;

export const ToggleVisibility = styled(Icon).attrs(({ visible }) => ({
  path: visible ? mdiEyeOff : mdiEye,
  size: '24px',
  color: '#fff',
}))`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  pointer-events: all;
  z-index: 1;
`;

const handleFocus = ({ focused, hasValue }) => {
  if (focused || hasValue) {
    return css`
      font-size: 14px;
      color: ${focused ? '#ec584c' : '#fff'};
      background-color: #30283d;
      top: -10px;
      padding: 0px 2px;
    `;
  }

  return null;
};

export const Label = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 1;

  font-family: Nunito;
  font-weight: 300;
  font-size: 16px;
  color: #fff;
  letter-spacing: 0.15px;
  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  ${handleFocus}
`;

export const HelperText = styled.span`
  color: #fff;
  font-family: Nunito;
  font-size: 12px;
  font-weight: 300;
  width: calc(100% - 4px);
  margin-top: 4px;
  display: flex;
  justify-content: flex-end;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
`;
