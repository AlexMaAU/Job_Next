import { StyledButton } from './styledButton';

const Button = ({ className, children, ...props }) => {
  return (
    // props记录Button的自定义参数，通过 ...props 展开所有的相关参数
    // 要给组件覆盖新的CSS样式，还一定要把 className 关键词作为 props 传入进来
    <StyledButton {...props} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
