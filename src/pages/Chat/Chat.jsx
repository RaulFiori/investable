import React, { useReducer, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiSend } from '@mdi/js';
import Header from '../../components/Header/Header';
import {
  Background,
  Message,
  MessageText,
  ChatHead,
  Logo,
  UserInputContainer,
  Form,
  TextFieldContainer,
  UserChatHead,
  ButtonForm,
} from './Chat.styles';
import reducer, { initialState } from './ChatReducer';
import TextField from '../../components/TextField/TextField';
import IconButton from '../../components/IconButton/IconButton';
import Button from '../../components/Button/Button';

const helpMessages = [
  `Olá João, podemos te ajudar em algo? Talvez uma ajuda sobre fundos
novos? Ou mesmo em problemas com o seu aplicativo?`,
];

const signupMessages = [
  'Olá, nós somos a Investable. A nossa proposta é fazer você investir bem e investir com facilidade.',
  'Primeiramente, gostaríamos de saber o seu nome.',
];

const nameAnswers = [
  'Bem-vindo #userName, precisamos definir o seu perfil de investidor e para isso preciso fazer umas perguntas rápidas.',
  'Quantos anos você tem?',
];

const ageAnswer = (
  <>
    Muito bom!
    <br />
    Sobre investimentos, o que você pensa quando fala sobre?
  </>
);

export const Chat = () => {
  const { type } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');
  const history = useHistory();

  const isHelp = type === 'help';
  const initialMessages = isHelp ? helpMessages : signupMessages;
  const title = isHelp ? 'CHAT' : 'ABRA SUA CONTA';

  const { inputLabel, inputType, step, name, age } = state;
  const [initialLetter] = name || [];
  const isInTextFieldSteps = ['name', 'age'].includes(step);

  const onSubmit = event => {
    event.preventDefault();
    dispatch({ type: `set_${step}`, payload: { value: text } });
    setText('');
  };

  const setResponse = (field, value) => () => {
    dispatch({ type: `set_${field}`, payload: { value } });
  };

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
        {name && (
          <>
            <Message userMessage>
              <MessageText>
                <UserChatHead>{initialLetter.toUpperCase()}</UserChatHead>
                {name}
              </MessageText>
            </Message>
            {nameAnswers.map(message => (
              <Message>
                <MessageText>
                  <ChatHead>
                    <Logo />
                  </ChatHead>
                  {message.replace('#userName', name)}
                </MessageText>
              </Message>
            ))}
          </>
        )}
        {age && (
          <>
            <Message userMessage>
              <MessageText>
                <UserChatHead>{initialLetter.toUpperCase()}</UserChatHead>
                {age}
              </MessageText>
            </Message>
            <Message>
              <MessageText>
                <ChatHead>
                  <Logo />
                </ChatHead>
                {ageAnswer}
              </MessageText>
            </Message>
          </>
        )}
        <UserInputContainer direction={isInTextFieldSteps ? 'row' : 'column'}>
          {isInTextFieldSteps && (
            <Form onSubmit={onSubmit}>
              <TextFieldContainer>
                <TextField
                  value={text}
                  mode="light"
                  label={inputLabel}
                  type={inputType}
                  onChange={({ target: { value } }) => setText(value)}
                />
              </TextFieldContainer>
              <IconButton type="submit">
                <Icon path={mdiSend} color="#fff" size="20px" />
              </IconButton>
            </Form>
          )}
          {step === 'will' && (
            <>
              <ButtonForm onClick={setResponse('will', 'no')}>
                Não curto muito
              </ButtonForm>
              <ButtonForm onClick={setResponse('will', 'yes')}>
                Eu gosto de investimentos!
              </ButtonForm>
            </>
          )}
          {step === 'risk' && (
            <>
              <ButtonForm onClick={setResponse('risk', 'risky')}>
                Rentabilidade
              </ButtonForm>
              <ButtonForm onClick={setResponse('risk', 'safe')}>
                Segurança
              </ButtonForm>
            </>
          )}
          {step === 'finish' && (
            <>
              <ButtonForm onClick={() => history.replace('/firstAccess')}>
                Sim, vamos!
              </ButtonForm>
              <ButtonForm onClick={() => history.goBack()}>
                Não, prefiro rever minhas respostas
              </ButtonForm>
            </>
          )}
        </UserInputContainer>
      </Background>
    </>
  );
};
