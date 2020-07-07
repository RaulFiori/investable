import React, { useEffect, useState, useReducer } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Api from '../../api/api';
import Section from '../../components/Section/Section';
import ValueDisplay from './components/ValueDisplay';
import {
  UserInitial,
  Flex,
  Column,
  Name,
  Risk,
  Bold,
  Item,
} from './Profile.styles';
import Button from '../../components/Button/Button';
import Switch from '../../components/Switch/Switch';
import reducer, { initialState } from './ProfileReducer';

const api = new Api();

const personalDataReference = [
  {
    key: 'email',
    label: 'Email',
  },
  {
    key: 'cpf',
    label: 'CPF',
  },
  {
    key: 'rg',
    label: 'RG',
  },
];

const bankDataReference = [
  {
    key: 'bank',
    label: 'Banco',
    getValue: ({ bank: { name, code } }) => `${code}  - ${name}`,
  },
  {
    key: 'branch',
    label: 'Agência',
  },
  {
    key: 'number',
    label: 'Conta Corrente',
  },
];

const securityItems = ['Mudar de Senha', 'Validar Token de Segurança'];

const notificationItems = [
  {
    label: 'Email',
    key: 'email',
  },
  {
    label: 'Push',
    key: 'push',
  },
  {
    label: 'SMS',
    key: 'sms',
  },
];

export const Profile = () => {
  const { userId } = useParams();
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [notifications, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    api.getProfile(userId).then(setUser);
  }, [userId]);

  if (!user) {
    return 'Loading...';
  }

  const { name, lastName, risk } = user;
  const [firstLetter] = name;

  return (
    <>
      <Flex>
        <UserInitial>{firstLetter}</UserInitial>
        <Column>
          <Name>{`${name} ${lastName}`}</Name>
          <Risk>
            PERFIL DE RISCO: &nbsp; <Bold>{risk}</Bold>
          </Risk>
        </Column>
      </Flex>
      <Section title="Dados Pessoais" margin={15}>
        {personalDataReference.map(dataReference => (
          <ValueDisplay
            key={dataReference.key}
            reference={dataReference}
            object={user}
          />
        ))}
      </Section>
      <Section title="Dados Bancários">
        {bankDataReference.map(bankReference => (
          <ValueDisplay
            key={bankReference.key}
            object={user.account}
            reference={bankReference}
          />
        ))}
      </Section>
      <Section title="Segurança" margin={30}>
        {securityItems.map(item => (
          <Item key={item}>{item}</Item>
        ))}
      </Section>
      <Section title="Notificações" margin={30}>
        {notificationItems.map(({ key, label }) => (
          <Item key={key}>
            {label}{' '}
            <Switch
              checked={notifications[key]}
              onChange={() =>
                dispatch({ type: 'toggle_config', payload: { key } })
              }
            />
          </Item>
        ))}
      </Section>
      <Button onClick={() => history.replace('/')}>SAIR DO APLICATIVO</Button>
    </>
  );
};
