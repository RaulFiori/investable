import styled from 'styled-components';
import chart from '../../assets/chart.svg';

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

export const ChartContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Chart = styled.img.attrs(() => ({ src: chart, alt: '' }))`
  width: 307px;
  height: 206px;
`;
