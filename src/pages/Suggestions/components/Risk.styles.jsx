import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const Third = styled.div`
  display: flex;
  flex-basis: ${100 / 3}%;
  height: 20px;
  background: #e84952 0% 0% no-repeat padding-box;

  &:last-child {
    border-radius: 0px 4px 4px 0px;
    background-color: #e43959;
  }

  &:first-child {
    border-radius: 4px 0px 0px 4px;
    background-color: #ec584c;
  }
`;

export const Arrow = styled.div`
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  border-top: 15px solid #e84952;
  width: 0px;
  height: 0px;
`;

export const Text = styled.span`
  font: 300 16px Nunito;
  letter-spacing: 0px;
  color: #fff;
  margin-top: 5px;
  width: 100%;
  text-align: center;
`;
