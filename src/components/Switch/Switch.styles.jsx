import styled, { css } from 'styled-components';

const handleChecked = ({ checked }) => {
  if (checked) {
    return css`
      background: #e43959 0% 0% no-repeat padding-box;
      justify-content: flex-end;
    `;
  }

  return null;
};

export const SwitchBase = styled.div`
  display: flex;
  flex-direction: row;
  width: 32px;
  height: 16px;
  border-radius: 8px;
  box-sizing: border-box;
  background: #30283d 0% 0% no-repeat padding-box;
  justify-content: flex-start;
  padding: 2px;
  ${handleChecked}
  transition: all 150ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Ball = styled.div`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background: #595364 0% 0% no-repeat padding-box;
`;
