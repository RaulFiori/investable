import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Container, IconButton, ScreenTitle, BackIcon } from './Header.styles';

const Header = ({ children, withBack, backUrl }) => {
  const history = useHistory();
  return (
    <Container>
      {withBack && (
        <IconButton
          onClick={() =>
            backUrl ? history.replace(backUrl) : history.goBack()
          }
        >
          <BackIcon />
        </IconButton>
      )}
      <ScreenTitle>{children}</ScreenTitle>
    </Container>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  withBack: PropTypes.bool,
  backUrl: PropTypes.string,
};

Header.defaultProps = {
  children: null,
  withBack: true,
  backUrl: null,
};

export default Header;
