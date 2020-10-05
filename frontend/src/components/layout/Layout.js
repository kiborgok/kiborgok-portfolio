import React from 'react'
import MobileNav from '../mobileNav/MobileNav';
import SideBar from '../sideBar/SideBar';
import UserHeader from '../userHeader/UserHeader';
import { StyledContent } from './styles';

const Layout = ({user, children}) => {
  return (
    <>
      <MobileNav />
      <SideBar />
      <StyledContent>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;