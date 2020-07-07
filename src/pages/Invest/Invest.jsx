import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../api/api';
import Section from '../../components/Section/Section';
import Product from '../../components/Product/Product';
import Category from './components/Category';

const api = new Api();

export const Invest = () => {
  const { userId } = useParams();
  const [investments, setInvestments] = useState(null);

  useEffect(() => {
    api.getInvestments(userId).then(setInvestments);
  }, [userId]);

  if (!investments) {
    return 'Loading... ';
  }

  const { recomendedProducts, categories } = investments;

  return (
    <>
      <Section title="Produtos recomendados para seu perfil" margin={20}>
        {recomendedProducts.map(product => (
          <Product jey={product.type} product={product} />
        ))}
      </Section>
      <Section title="Escolha uma categoria de produtos para aplicar">
        {categories.map(category => (
          <Category key={category.name} category={category} />
        ))}
      </Section>
    </>
  );
};
