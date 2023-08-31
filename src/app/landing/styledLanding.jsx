import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Navigation = styled.nav`
  height: 96px; //header高度固定
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

// export const Navigation = styled.nav`
//   height: 96px; //header高度固定
//   display: flex;
//   align-items: center;
//   padding: 0 16px;
// `;

// export const HeroContainer = styled.section`
//   flex: 1; //用flex:1来填充剩余空间
//   display: flex;
//   gap: 40px;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 16px;

//   @media screen and (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 0;
//   }
// `;

// export const HeroText = styled.div`
//   width: 49%;

//   @media screen and (max-width: 768px) {
//     width: 90%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// export const Title = styled.h1`
//   font-size: 36px;
//   & span {
//     /* color: #2cb1bc; */
//     color: ${(prop) =>
//       prop.theme.colors
//         .primary}; //从theme中调用颜色变量（theme定义在 src/layout.tsx 中）
//     margin: 0 10px;
//   }

//   @media screen and (max-width: 768px) {
//   }
// `;

// export const Description = styled.p`
//   color: ${(prop) => prop.theme.colors.gray};
//   margin-top: 24px;

//   @media screen and (max-width: 768px) {
//   }
// `;

// export const HeroImg = styled.div`
//   flex: 49%;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
