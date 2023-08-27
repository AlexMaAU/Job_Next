import styled from 'styled-components';

export const LayoutContainer = styled.main`
  display: flex;
`;

export const DrawerContainer = styled.aside`
  width: 300px;
  padding: 20px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
  margin-left: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  transition: margin-left 0.3s ease-in-out;
`;

export const MainContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
