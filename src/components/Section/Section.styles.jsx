import styled from 'styled-components';

export const Title = styled.span`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 2px solid #fff;
  margin-bottom: 15px;
  color: #fff;
`;

export const Wrapper = styled.div`
  margin-bottom: ${({ margin }) => margin}px;
  display: flex;
  flex-direction: column;
`;
