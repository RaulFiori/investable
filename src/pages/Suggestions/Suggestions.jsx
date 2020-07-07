import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  UserName,
  SuggestedText,
  UserInitial,
} from './Suggestions.styles';
import Api from '../../api/api';
import Product from '../../components/Product/Product';
import Risk from './components/Risk';

const api = new Api();

export const Suggestions = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.getSuggestions(userId).then(setUser);
  }, [userId]);

  if (!user) {
    return 'Loading...';
  }

  const { risk, userName: name, recomendedProducts } = user;
  const [initialLetter] = name;

  return (
    <>
      <Container>
        <UserInitial>{initialLetter}</UserInitial>
      </Container>
      <UserName>{name}</UserName>
      <Risk risk={risk} />
      <SuggestedText>
        Com base no seu perfil sugerimos os seguintes produtos
      </SuggestedText>
      {recomendedProducts.map(product => (
        <Product product={product} />
      ))}
    </>
  );
};
