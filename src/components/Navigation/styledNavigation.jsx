import styled from 'styled-components';

export const Navigation = styled.nav`
  height: 96px; //header高度固定
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const DrawerToggleButton = styled.button`
  cursor: pointer;
`;

export const NavTitle = styled.h1`
  font-weight: 500;
`;
