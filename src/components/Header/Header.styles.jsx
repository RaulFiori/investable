import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';

export const BackIcon = styled(Icon).attrs(() => ({
  path: mdiArrowLeft,
  size: '20px',
  color: '#fff',
}))``;

export const IconButton = styled.div`
  border-radius: 50%;
  padding: 4px;
  background-color: transparent;
  &:hover {
    background-color: rgba(255, 255, 255, 0.38);
  }
  position: absolute;
  left: 0;
  top: 0;
  height: 28px;
  width: 28px;
  box-sizing: border-box;
`;

export const ScreenTitle = styled.span`
  font-size: 16px;
  font-family: Nunito;
  letter-spacing: 0px;
  color: #ffffff;
  font-weight: 700;
`;

export const Separator = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-basis: 50%;
  flex-grow: 50%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 28px;
  justify-content: center;
  position: relative;
`;
