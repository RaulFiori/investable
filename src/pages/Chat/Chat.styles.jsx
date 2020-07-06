import styled, { css } from 'styled-components';
import logo from '../../assets/Investable.svg';
import Button from '../../components/Button/Button';

export const ChatHead = styled.div`
  background: transparent
    radial-gradient(closest-side at 50% 50%, #403850 0%, #30283d 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 20px 20px 4px 20px;
  width: 40px;
  height: 40px;
  position: absolute;
  top: -20px;
  left: -50px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserChatHead = styled.div`
  background: transparent linear-gradient(180deg, #e43959 0%, #ec584c 100%) 0%
    0% no-repeat padding-box;
  border-radius: 20px 20px 20px 4px;
  width: 40px;
  height: 40px;
  position: absolute;
  top: -20px;
  right: -50px;

  color: #fff;
  font: 500 20px Nunito;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #f9f9f9 0% 0% no-repeat padding-box;
  width: 100vw;
  height: 100vh;
  margin-bottom: -80px;
  margin-right: -82px;
  margin-left: -82px;
  box-sizing: border-box;
  padding-left: 70px;
  padding-right: 20px;
  @media (max-width: 767px) {
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: -80px;
  }
`;

export const MessageText = styled.div`
  color: #404040;
  font: 300 16px Nunito;
  letter-spacing: 0.15px;
  text-align: left;
  max-width: 280px;
  position: relative;
`;

const handleUserMessage = ({ userMessage }) => {
  if (userMessage) {
    return css`
      padding-right: 40px;
      justify-content: flex-end;
    `;
  }

  return null;
};

export const Message = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  ${handleUserMessage}
`;

export const Logo = styled.img.attrs(() => ({ src: logo, alt: '' }))`
  height: 20px;
  width: auto;
`;

export const UserInputContainer = styled.div`
  position: absolute;
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
