import styled from 'styled-components'

export const Section = styled.section`
  flex: 1; //用flex:1来填充剩余空间
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
  }
`;
