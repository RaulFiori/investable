import React from 'react';
import PropTypes from 'prop-types';
import { Row, Third, Text, Arrow } from './Risk.styles';

const Risk = ({ risk }) => {
  return (
    <>
      <Row>
        <Third />
        <Third />
        <Third />
      </Row>
      <Row>
        <Arrow />
      </Row>
      <Text>{risk}</Text>
    </>
  );
};

Risk.propTypes = {
  risk: PropTypes.string.isRequired,
};

export default Risk;
