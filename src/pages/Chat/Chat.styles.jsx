import styled from 'styled-components';
import logo from '../../assets/Investable.svg';

export const ChatHead = styled.div`
  background: transparent
    radial-gradient(closest-side at 50% 50%, #403850 0%, #30283d 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 20px 20px 4px 20px;
  width: 40px;
  height: 40px;
  position: absolute;
  transform-origin: bottom right;
  top: -20px;
  left: -50px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
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

export const Message = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
`;

export const Logo = styled.img.attrs(() => ({ src: logo, alt: '' }))`
  height: 20px;
  width: auto;
`;
