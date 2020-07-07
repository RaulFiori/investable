import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 22px;
  box-sizing: border-box;
  margin-bottom: 22px;
  &:last-child {
    margin-bottom: 0;
  }
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
`;

export const NameCard = styled.div`
  box-sizing: border-box;
  border: 1px solid #e43959;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #e43959;
  font: 500 18px Nunito;
`;

export const Name = styled.span`
  font: 500 14px Nunito;
  color: #e43959;
  letter-spacing: 0px;
  margin-bottom: 4px;
`;

export const Types = styled.span`
  font: 300 14px Nunito;
  letter-spacing: 0px;
  color: #fff;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;
