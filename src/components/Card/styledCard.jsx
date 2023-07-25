import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 40px;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg_color};
  border-radius: ${(props) => props.theme.borderRadius};
  max-width: 400px;
`;
