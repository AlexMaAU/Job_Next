import { Navigation, DrawerToggleButton, NavTitle } from './styledNavigation';
import Button from 'components/Button/Button';
import Image from 'next/image';

const NavigationComponent = () => {
  return (
    <Navigation>
      <DrawerToggleButton>
        <Image src='/image/fold.svg' width={32} height={32} />
      </DrawerToggleButton>
      <NavTitle>Dashboard</NavTitle>
      <Button startIcon='/image/profile.svg' endIcon='/image/downChevron.svg'>
        profile
      </Button>
      {/* 把Logo图片也单独做成一个组件，作为 children 传入 */}
      {/* <Image width='164' height='50' alt='logo' src='./image/logo.svg' /> */}
      {/* {children} */}
    </Navigation>
  );
};

export default NavigationComponent;
