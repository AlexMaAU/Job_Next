'use client';

import {
  LayoutContainer,
  DrawerContainer,
  MainContainer,
  DashboardContainer,
} from './layout.styles';
import Navigation from '../../components/Navigation/Navigation';
import Drawer from 'components/Drawer/Drawer';
import Logo from '../../components/Logo/Logo';
import { useAppContext } from 'context/appContext';

const DashboardLayout = ({ children }) => {
  const { isDrawerOpen } = useAppContext();
  return (
    <LayoutContainer>
      <DrawerContainer isOpen={isDrawerOpen}>
        <Logo />
        <Drawer />
      </DrawerContainer>
      <MainContainer>
        <Navigation />
        <DashboardContainer className='dashboardContainer'>
          {children}
        </DashboardContainer>
      </MainContainer>
    </LayoutContainer>
  );
};

export default DashboardLayout;
