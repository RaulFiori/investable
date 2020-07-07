import React, { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiArrowUp } from '@mdi/js';
import { useParams } from 'react-router-dom';
import Api from '../../api/api';
import Section from '../../components/Section/Section';
import {
  Currency,
  Tag,
  Value,
  ValuesContainer,
  Chart,
  ChartContainer,
} from './Dashboard.styles';
import Product from '../../components/Product/Product';

const api = new Api();

const Dashboard = () => {
  const { userId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    api.getDashboard(userId).then(setData);
  }, [userId]);

  if (!data) {
    return 'Loading...';
  }

  const {
    totalAmount,
    income,
    incomeRate,
    incomeRateCDI,
    recomendedProducts,
  } = data;

  return (
    <>
      <Section margin={48} title="Patrimônio e rendimentos">
        <ValuesContainer>
          <Value>
            <Currency>R$</Currency>
            &nbsp;
            {totalAmount}
          </Value>
          <Tag>
            <Icon path={mdiArrowUp} size="10px" />
            {`R$ ${income}`}
          </Tag>
        </ValuesContainer>
      </Section>
      <Section margin={22} title="Rentabilidade">
        <ValuesContainer>
          <Value>{`${incomeRate}%`}</Value>
          <Tag>{`${incomeRateCDI}% do CDI`}</Tag>
        </ValuesContainer>
      </Section>
      <ChartContainer>
        <Chart />
      </ChartContainer>
      <Section title="Produtos recomendados para seu perfil">
        {recomendedProducts.map(product => (
          <Product product={product} />
        ))}
      </Section>
    </>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
