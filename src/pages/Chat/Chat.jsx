import React from 'react';
import Header from '../../components/Header/Header';
import {
  Background,
  Message,
  MessageText,
  ChatHead,
  Logo,
} from './Chat.styles';
import { useParams } from 'react-router-dom';

const helpMessages = [
  `Olá João, podemos te ajudar em algo? Talvez uma ajuda sobre fundos
novos? Ou mesmo em problemas com o seu aplicativo?`,
];

const signupMessages = [
  'Olá, nós somos a Investable. A nossa proposta é fazer você investir bem e investir com facilidade.',
  'Primeiramente, gostaríamos de saber o seu nome.',
];

export const Chat = () => {
  const { type } = useParams();
  const isHelp = type === 'help';
  const initialMessages = isHelp ? helpMessages : signupMessages;

  const title = isHelp ? 'CHAT' : 'ABRA SUA CONTA';

  return (
    <>
      <Header>{title}</Header>
      <Background>
        {initialMessages.map(message => (
          <Message>
            <MessageText>
              <ChatHead>
                <Logo />
              </ChatHead>
              {message}
            </MessageText>
          </Message>
        ))}
      </Background>
    </>
  );
};
