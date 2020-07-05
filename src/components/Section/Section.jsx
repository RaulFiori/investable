import React from 'react';
import PropTypes from 'prop-types';
import { Title, Wrapper } from './Section.styles';

const Section = ({ title, children, margin }) => {
  return (
    <Wrapper margin={margin}>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  margin: PropTypes.number,
};

Section.defaultProps = {
  children: null,
  margin: 0,
};

export default Section;
