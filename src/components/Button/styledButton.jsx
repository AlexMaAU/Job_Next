import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(prop) => prop.theme.colors.primary};
  color: white;
  font-size: 16px;
  border: none;
  padding: 15px 80px;
  margin-top: 40px;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${(prop) => prop.theme.colors.secondary};
  }

  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }
`;
