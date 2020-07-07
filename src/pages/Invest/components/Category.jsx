import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiMenuRight } from '@mdi/js';
import {
  Wrapper,
  NameCard,
  Column,
  Name,
  Types,
  Flex,
} from './Category.styles';

const Category = ({ category }) => {
  const { name, types } = category;

  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('');

  return (
    <Wrapper>
      <Flex>
        <NameCard>{initials}</NameCard>
        <Column>
          <Name>{name}</Name>
          <Types>{types.join(', ')}</Types>
        </Column>
      </Flex>
      <Icon path={mdiMenuRight} color="#fff" size="16px" />
    </Wrapper>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Category;
