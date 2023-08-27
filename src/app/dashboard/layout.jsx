'use client';

import {
  LayoutContainer,
  DrawerContainer,
  MainContainer,
} from './layout.styles';
import Navigation from '../../components/Navigation/Navigation';
import Drawer from 'components/Drawer/Drawer';

const DashboardLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <DrawerContainer isOpen>
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
