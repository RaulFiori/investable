import React, { useReducer, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiSend } from '@mdi/js';
import Header from '../../components/Header/Header';
import {
  Background,
  UserInputContainer,
  Form,
  TextFieldContainer,
  ButtonForm,
} from './Chat.styles';
import reducer, { initialState } from './ChatReducer';
import TextField from '../../components/TextField/TextField';
import IconButton from '../../components/IconButton/IconButton';
import MessageComponent from './components/Message';

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
const willAnswer = (
  <>
    Legal, eu também! <br />
    E, me conte, do que você gosta mais em investimentos?
  </>
);

const riskAnswers = [
  { scrollOnEnter: false, message: 'Certamente podemos te ajudar com isso!' },
  {
    scrollOnEnter: true,
    message:
      'Muito obrigado pelas respostas #userName. Com isso já consigo te sugerir vários produtos do nosso portfólio, vamos lá?',
  },
];

export const Chat = () => {
  const { type } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');
  const history = useHistory();

  const isHelp = type === 'help';
  const initialMessages = isHelp ? helpMessages : signupMessages;
  const title = isHelp ? 'CHAT' : 'ABRA SUA CONTA';

  const { inputLabel, inputType, step, name, age, will, risk } = state;
  const [initialLetter] = name || [];
  const userInitial = initialLetter?.toUpperCase();
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
          <MessageComponent show>{message}</MessageComponent>
        ))}
        <MessageComponent
          show={Boolean(name)}
          userMessage
          userInitial={userInitial}
        >
          {name}
        </MessageComponent>
        {nameAnswers.map(message => (
          <MessageComponent show={Boolean(name)}>
            {message.replace('#userName', name)}
          </MessageComponent>
        ))}
        <MessageComponent
          show={Boolean(age)}
          userMessage
          userInitial={userInitial}
        >
          {age}
        </MessageComponent>
        <MessageComponent show={Boolean(age)}>{ageAnswer}</MessageComponent>
        <MessageComponent
          show={Boolean(will)}
          userMessage
          userInitial={userInitial}
        >
          {will}
        </MessageComponent>
        <MessageComponent scrollOnEnter show={Boolean(will)}>
          {willAnswer}
        </MessageComponent>
        <MessageComponent
          show={Boolean(risk)}
          userMessage
          userInitial={userInitial}
        >
          {risk}
        </MessageComponent>
        {riskAnswers.map(({ message, scrollOnEnter }) => (
          <MessageComponent scrollOnEnter={scrollOnEnter} show={Boolean(risk)}>
            {message.replace('#userName', name)}
          </MessageComponent>
        ))}
        <UserInputContainer direction={isInTextFieldSteps ? 'row' : 'column'}>
          {isInTextFieldSteps && (
            <Form onSubmit={onSubmit}>
              <TextFieldContainer>
                <TextField
                  value={text}
                  mode="light"
                  label={inputLabel}
                  type={inputType}
                  fullWidth
                  onChange={({ target: { value } }) => setText(value)}
                />
              </TextFieldContainer>
              <IconButton disabled={text?.length === 0} type="submit">
                <Icon path={mdiSend} color="#fff" size="20px" />
              </IconButton>
            </Form>
          )}
          {step === 'will' && (
            <>
              <ButtonForm onClick={setResponse('will', 'Não curto muito')}>
                Não curto muito
              </ButtonForm>
              <ButtonForm
                onClick={setResponse('will', 'Eu gosto de investimentos!')}
              >
                Eu gosto de investimentos!
              </ButtonForm>
            </>
          )}
          {step === 'risk' && (
            <>
              <ButtonForm onClick={setResponse('risk', 'Rentabilidade!')}>
                Rentabilidade
              </ButtonForm>
              <ButtonForm onClick={setResponse('risk', 'Segurança!')}>
                Segurança
              </ButtonForm>
            </>
          )}
          {step === 'finish' && (
            <>
              <ButtonForm
                onClick={() =>
                  history.replace(
                    `/home/${process.env.REACT_APP_USER_ID}/firstAccess`,
                  )
                }
              >
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
