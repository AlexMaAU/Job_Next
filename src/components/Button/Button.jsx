import { StyledButton } from './styledButton';
import Image from 'next/image';

const Button = ({ className, children, primary_light, startIcon, endIcon }) => {
  return (
    // props记录Button的自定义参数，通过 ...props 展开所有的相关参数
    // 要给组件覆盖新的CSS样式，还一定要把 className 关键词作为 props 传入进来
    <StyledButton primary_light={primary_light} className={className}>
      {startIcon && (
        <Image
          alt='Start Icon'
          src={startIcon}
          width={20}
          height={20}
          style={{ marginRight: '6px' }}
        />
      )}
      {children}
      {endIcon && (
        <Image
          alt='End Icon'
          src={endIcon}
          width={18}
          height={18}
          style={{ marginLeft: '6px' }}
        />
      )}
    </StyledButton>
  );
};

export default Button;
