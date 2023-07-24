import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  height: 96px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const HeroText = styled.div`
  width: 49%;
`;

export const Title = styled.h1`
  font-size: 36px;
  & span {
    /* color: #2cb1bc; */
    color: ${(prop) => prop.theme.color}
  }
`;

export const HeroImg = styled.div`
  flex: 49%;
`;
