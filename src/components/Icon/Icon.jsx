import icons from './Icons';
import styled from 'styled-components';

const IconWrapper = styled.span`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  svg {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.color || 'inherit'};
  }
`;

const Icon = ({ name, color, width, height }) => {
  const svgHtml = icons[name];

  return (
    <IconWrapper
      color={color}
      width={width}
      height={height}
      dangerouslySetInnerHTML={{ __html: svgHtml }}
    />
  );
};

export default Icon;
