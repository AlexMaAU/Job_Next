import styled from 'styled-components';

export const Navigation = styled.nav`
  width: 100%;
  height: 96px; //header高度固定
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

  @media screen and (max-width: 768px) {
    /* margin-top: 60px; */
    padding: 0;
    justify-content: center;
    gap: 20px;
  }
`;

export const DrawerToggleButton = styled.button`
  cursor: pointer;
`;

export const NavTitle = styled.h1`
  font-weight: 500;
`;
