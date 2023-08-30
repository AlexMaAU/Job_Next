import styled from 'styled-components';

export const LinkText = styled.span`
  margin-left: 12px;
`;

export const Item = styled.li`
  list-style: none;
  margin: 32px 0;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  transition: all 0.5s ease;

  ${(props) =>
    props.isSelected &&
    `
      color: ${props.theme.colors.primary};
      svg {
        color: ${props.theme.colors.primary};
      }
  `}

  &:hover {
    transform: translateX(12px);
    color: ${({ theme }) => theme.colors.primary};
  }
`;
