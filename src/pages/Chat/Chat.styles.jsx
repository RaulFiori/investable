import styled from 'styled-components';
import Button from '../../components/Button/Button';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #f9f9f9 0% 0% no-repeat padding-box;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding-left: 70px;
  padding-right: 20px;
  padding-bottom: 140px;
  overflow: scroll;
`;

export const UserInputContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px;
  background: transparent;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const TextFieldContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin-right: 15px;
`;

export const ButtonForm = styled(Button)`
  margin-bottom: 5px;
  &:last-child {
    margin: 0;
  }
`;
