import styled from 'styled-components';

export const TabsContainer = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;

  background: #1a1423 0% 0% no-repeat padding-box;
  box-shadow: 0px -1px 3px #00000033;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: ${100 / 3}%;
  height: 100%;
  cursor: pointer;
  color: ${({ selected }) => (selected ? '#e43959' : '#fff')};

  &:hover {
    background-color: rgba(255, 255, 255, 0.38);
  }
`;

export const TabLabel = styled.span`
  letter-spacing: 0px;
  color: inherit;
  font: 500 12px Nunito;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;
