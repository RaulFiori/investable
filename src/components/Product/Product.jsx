import React from 'react';
import PropTypes from 'prop-types';
import { Card, ValueField, Field } from './Product.styles';

const Product = ({ product: { type, incomeRate, from } }) => {
  return (
    <Card>
      <ValueField>
        <Field>{type}</Field>
        {from}
      </ValueField>
      <ValueField percentage={25}>
        <Field>Taxa</Field>
        {`${incomeRate}%`}
      </ValueField>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    type: PropTypes.string,
    incomeRate: PropTypes.string,
    from: PropTypes.string,
  }).isRequired,
};

export default Product;
