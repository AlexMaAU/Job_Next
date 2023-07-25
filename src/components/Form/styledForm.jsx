import styled from 'styled-components';
// 导入要覆盖样式的组件
import Button from 'components/Button/Button';

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 给组件覆盖新的样式
export const StyledButton = styled(Button)`
  width: 100%;
`;

export const ToggleText = styled.div`
  margin-top: 20px;

  & span {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;
