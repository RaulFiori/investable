import styled, { css } from 'styled-components';
import logo from '../../../assets/Investable.svg';

const handleUserMessage = ({ userMessage }) => {
  if (userMessage) {
    return css`
      padding-right: 40px;
      justify-content: flex-end;
    `;
  }

  return null;
};

const transitionStyles = {
  entering: css`
    opacity: 0.15;
    transform: translateY(100vh);
  `,
  entered: css`
    opacity: 1;
    transform: translateY(0px);
  `,
  exiting: css`
    opacity: 0.15;
    transform: translateY(100vh);
  `,
  exited: css`
    opacity: 0;
    transform: translateY(0px);
  `,
};

export const MessageContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  transition: all 150ms ease-in-out;
  ${handleUserMessage}
  ${({ state }) => transitionStyles[state]}
`;

export const Logo = styled.img.attrs(() => ({ src: logo, alt: '' }))`
  height: 20px;
  width: auto;
`;

export const MessageText = styled.div`
  color: #404040;
  font: 300 16px Nunito;
  letter-spacing: 0.15px;
  text-align: left;
  max-width: 280px;
  position: relative;
`;

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
