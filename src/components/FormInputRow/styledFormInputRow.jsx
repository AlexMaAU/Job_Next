import styled from 'styled-components';

export const Container = styled.div`
  /* margin-top: 16px; */
  margin-bottom: 30px;
  width: 100%;
`;

export const Label = styled.label`
  text-transform: capitalize;
  width: 100%;
`;

export const Input = styled.input`
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.light_gray};
  background-color: #f0f4f8;
  display: block;
  height: 35px;
  padding: 0 8px;
  margin-top: 8px;
  width: 320px;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.gray};
  }
`;