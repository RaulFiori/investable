import styled from 'styled-components';

export const Background = styled.main`
  background: transparent
    radial-gradient(closest-side at 50% 50%, #403850 0%, #30283d 100%) 0% 0%
    no-repeat padding-box;
  opacity: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 82px;
  height: 100vh;

  @media (max-width: 767px) {
    padding: 20px 20px;
  }
`;
