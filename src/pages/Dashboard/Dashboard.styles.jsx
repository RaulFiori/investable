import styled from 'styled-components';

export const ValuesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Value = styled.span`
  letter-spacing: 0px;
  font: 300 26px Nunito;
  color: #fff;
`;

export const Currency = styled.span`
  font-size: 14px;
`;

export const Tag = styled.span`
  background: #595364 0% 0% no-repeat padding-box;
  border-radius: 4px;
  padding: 5px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font: 300 12px Nunito;
  & > svg {
    margin-right: 5px;
  }
`;

export const Chart = styled.div`
  background: transparent linear-gradient(180deg, #e43959 0%, #ec584c00 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
  width: 307px;
  height: 206px;
  margin-bottom: 30px;
`;
