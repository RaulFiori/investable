import styled from 'styled-components';
import Button from '../Button/Button';

const FloatingButton = styled(Button)`
  position: absolute;
  bottom: 72px;
  right: 20px;
  border-radius: 50%;
  z-index: 100;
  background: transparent linear-gradient(180deg, #e43959 0%, #ec584c 100%) 0%
    0% no-repeat padding-box;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 28px;
`;

export default FloatingButton;
