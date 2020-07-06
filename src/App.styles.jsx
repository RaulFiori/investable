import styled, { css } from 'styled-components';

const handleHasPadding = ({ hasPadding }) => {
  if (hasPadding) {
    return css`
      padding: 20px 82px;
      padding-bottom: 80px;

      @media (max-width: 767px) {
        padding: 20px;
        padding-bottom: 80px;
      }
    `;
  }
  return css`
    padding-top: 20px;
  `;
};

export const Background = styled.main`
  background: transparent
    radial-gradient(closest-side at 50% 50%, #403850 0%, #30283d 100%) 0% 0%
    no-repeat padding-box;
  opacity: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: scroll;
  height: 100vh;

  ${handleHasPadding}
`;
