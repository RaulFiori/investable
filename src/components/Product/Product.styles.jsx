import styled from 'styled-components';

export const Card = styled.div`
  background: #595364 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #00000033;
  border-radius: 4px;
  padding: 16px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ValueField = styled.span`
  font: 500 14px Nunito;
  letter-spacing: 0px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: ${({ end }) => (end ? 'flex-end' : 'flex-start')};
  flex-basis: ${({ percentage = 60 }) => percentage}%;
`;

export const Field = styled.span`
  font: 300 14px Nunito;
  letter-spacing: 0px;
  color: #dedce0;
`;
