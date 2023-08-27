import { Item, NavLink, LinkText } from './styledDrawer';
import Icon from 'components/Icon/Icon';

const Drawer = () => {
  return (
    <ul>
      <Item>
        <NavLink href='/dashboard/add'>
          <Icon width={'24px'} height={'24px'} name='addJob' />
          <LinkText>Add Job</LinkText>
        </NavLink>
      </Item>
      <Item>
        <NavLink href='/dashboard/all'>
          <Icon width={'24px'} height={'24px'} name='allJobs' />
          <LinkText>All Jobs</LinkText>
        </NavLink>
      </Item>
      <Item>
        <NavLink href='/dashboard/stats'>
          <Icon width={'24px'} height={'24px'} name='stats' />
          <LinkText>Stats</LinkText>
        </NavLink>
      </Item>
      <Item>
        <NavLink href='/dashboard/profile'>
          <Icon width={'24px'} height={'24px'} name='profile' />
          <LinkText>Profile</LinkText>
        </NavLink>
      </Item>
    </ul>
  );
};

export default Drawer;
