import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-size: 16px;
  border: none;
  padding: 10px 40px;
  /* margin-top: 40px; */
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  transition: background-color 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  @media screen and (max-width: 768px) {
    /* margin-top: 60px; */
    padding: 10px 20px;
  }

  /* 如果按钮的样式一样，只是背景颜色不同，可以通过传入一个props来进行颜色的切换 */
  ${(props) =>
    props.primary_light &&
    `
    background-color: ${props.theme.colors.primary_light}
    padding: 0
  `}
`;
