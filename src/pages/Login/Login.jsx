import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import TextField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import { Centralize } from './Login.styles';

const userId = 'mock';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  return (
    <>
      <Header>LOGIN</Header>
      <Centralize>
        <TextField
          label="Email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          marginBottom={30}
        />
        <TextField
          helperText="Esqueci minha senha"
          label="Senha"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          marginBottom={20}
          type="password"
        />
        <Button
          onClick={() => history.push(`/home/${userId}`)}
          disabled={email.length === 0 && password.length === 0}
        >
          ENTRAR
        </Button>
      </Centralize>
    </>
  );
};
