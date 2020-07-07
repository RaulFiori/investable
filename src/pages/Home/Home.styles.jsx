import styled from 'styled-components';
import Button from '../../components/Button/Button';
import logo from '../../assets/Investable.svg';

export const Title = styled.span`
  text-align: center;
  font-size: 40px;
  font-family: Nunito;
  font-weight: 700;
  letter-spacing: 0px;
  color: #ffffff;
  margin-top: 20px;
`;

export const SubTitle = styled.span`
  text-align: center;
  font-size: 20px;
  font-family: Nunito;
  font-weight: 300;

  letter-spacing: 0.19px;
  color: #ffffff;
  margin-top: 60px;
`;

export const DetailText = styled.span`
  font-weight: 300;
`;

export const SignUpButton = styled(Button).attrs(() => ({
  as: 'a',
  href: '/chat/signup',
}))`
  margin-bottom: 20px;
  margin-top: 60px;
`;

export const LoginButton = styled(Button).attrs(() => ({
  as: 'a',
  variant: 'outlined',
  href: '/login',
}))``;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 90px;
`;

export const Logo = styled.img.attrs(() => ({ src: logo, alt: '' }))`
  height: auto;
  width: 70px;
`;
