import React from 'react';
import PropTypes from 'prop-types';
import { Title, SubTitle, SignUpButton, DetailText, LoginButton, Logo, Center } from './Home.styles';

const Home = () => {
  return (
    <>
      <Center>
        <Logo />
      </Center>
      <Title>Investable</Title>
      <SubTitle>
        Investimentos não precisam <br /> ser complicados.
      </SubTitle>
      <SignUpButton>ABRA SUA CONTA</SignUpButton>
      <LoginButton>
        <DetailText>Já possui uma conta?</DetailText> &nbsp; ENTRAR
      </LoginButton>
    </>
  );
};

Home.propTypes = {};

export default Home;
