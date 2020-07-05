import styled from 'styled-components';

export const UserInitial = styled.div`
  background: transparent linear-gradient(180deg, #e43959 0%, #ec584c 100%) 0%
    0% no-repeat padding-box;
  font: 500 30px Nunito;
  letter-spacing: 0.28px;
  color: #fff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const Name = styled.span`
  font: 500 24px Nunito;
  color: #fff;
  margin-bottom: 16px;
`;

export const Risk = styled.span`
  font: 300 12px Nunito;
  color: #e84952;
  letter-spacing: 0px;
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  background: #595364 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #00000033;
  border-radius: 4px;
  font: 300 16px Nunito;
  color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  width: 100%;
  margin-bottom: 5px;
  box-sizing: border-box;

  &:last-child {
    margin-bottom: 0px;
  }
`;
