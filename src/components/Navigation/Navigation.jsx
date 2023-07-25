import { Navigation } from './styledNavigation';

const Navigate = ({children}) => {
  return (
    <Navigation>
      {/* 把Logo图片也单独做成一个组件，作为 children 传入 */}
      {/* <Image width='164' height='50' alt='logo' src='./image/logo.svg' /> */}
      {children}
    </Navigation>
  );
};

export default Navigate;
