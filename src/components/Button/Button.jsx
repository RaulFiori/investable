import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent linear-gradient(270deg, #e43959 0%, #ec584c 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #00000033;
  border-radius: 4px;
  border: none;
  text-align: center;
  font: 700 16px Nunito;
  letter-spacing: 0.15px;
  color: #ffffff;
  height: 56px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
  text-decoration: none;

  &:focus {
    outline: 0;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  &:disabled {
    pointer-events: none;
  }

  /* &:hover {

  } */

  ${({ variant }) =>
    variant === 'outlined' &&
    css`
      border: 1px solid #e43959;
      background: transparent;
    `};
`;

Button.propTypes = {
  variant: PropTypes.oneOf(['flat', 'outlined', 'solid']),
};

Button.defaultProps = {
  variant: 'solid',
};

export default Button;
