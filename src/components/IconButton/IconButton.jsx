import styled from 'styled-components';
import Button from '../Button/Button';

const IconButton = styled(Button)`
  background: transparent linear-gradient(305deg, #e43959 0%, #ec584c 100%) 0%
    0% no-repeat padding-box;

  border-radius: 20px;
  width: 40px;
  height: 40px;
  padding: 0;

  @media (min-width: 1024px) {
    min-width: 40px;
  }
`;

export default IconButton;
