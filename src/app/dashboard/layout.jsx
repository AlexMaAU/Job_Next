'use client';

import {
  LayoutContainer,
  DrawerContainer,
  MainContainer,
} from './layout.styles';
import Navigation from '../../components/Navigation/Navigation';
import Drawer from 'components/Drawer/Drawer';
import Logo from '../../components/Logo/Logo';

const DashboardLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <DrawerContainer isOpen>
        <Logo />
        <Drawer />
      </DrawerContainer>
      <MainContainer>
        <Navigation />
        <div className='dashboardContainer'>{children}</div>
      </MainContainer>
    </LayoutContainer>
  );
};

export default DashboardLayout;
