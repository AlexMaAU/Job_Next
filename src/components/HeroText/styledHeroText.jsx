import styled from 'styled-components';

export const Div = styled.div`
  width: 49%;

  @media screen and (max-width: 768px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  & span {
    /* color: #2cb1bc; */
    color: ${(prop) =>
      prop.theme.colors
        .primary}; //从theme中调用颜色变量（theme定义在 src/layout.tsx 中）
    margin: 0 10px;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const Description = styled.p`
  color: ${(prop) => prop.theme.colors.gray};
  margin-top: 24px;

  @media screen and (max-width: 768px) {
  }
`;
