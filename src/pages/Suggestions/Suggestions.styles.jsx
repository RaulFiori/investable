import styled from 'styled-components';

export const UserInitial = styled.div`
  background: transparent linear-gradient(180deg, #e43959 0%, #ec584c 100%) 0%
    0% no-repeat padding-box;
  font: 500 30px Nunito;
  letter-spacing: 0.28px;
  color: #fff;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const UserName = styled.span`
  color: #fff;
  font: 500 24px Nunito;
  letter-spacing: 0px;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
`;

export const SuggestedText = styled(UserName)`
  font-size: 18px;
  margin-top: 40px;
`;
