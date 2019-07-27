import styled from 'styled-components';
import ContanerBase from '@globalStyles/Container';
import breakPoints from '@globalStyles/breakPoints';

import arrowDown from '@images/arrow-down.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;

  @media screen and (min-width: ${ breakPoints.tablet }px) {
    display: none;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 60px;
  background-color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const LogoLink = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonToggleSidebar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  cursor: pointer;
`;

export const ButtonToggleSidebarIcon = styled.img``;

export const Logo = styled.img``;

export const SideBarWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: ${ ({active}) => active ? 0 : -200 }px;
  width: 200px;
  height: calc(100vh - 60px);
  background-color: #024B8E;
  z-index: 2;
  transition: left .3s ease;

  ::before {
    content: '';
    display: block;
    width: 60px;
    height: 60px;
    background-color: #024B8E;
    position: absolute;
    left: 0;
    bottom: 100%;
    z-index: 2;
  }
`;

export const Sidebar = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Menu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const MenuItem = styled.li`
  width: 100%;
  margin-top: 24px;
`;

export const MenuLink = styled.a`
  width: 100%;
  padding: 0 22px;
  text-decoration: none;
  font-size: 14px;
  color: #FFF;
  font-family: "FontProximaNova", sans-serif;
  font-weight: 600;
  display: block;
  box-sizing: border-box;
`;

export const SidebarButtonAccount = styled(MenuLink)`
  padding: 24px 15px 24px 22px;
  border-bottom: 1px solid rgba(255,255,255,.3);
`;

export const SidebarButtonReservations = styled.a`
  width: 100%;
  padding: 24px 20px;
  background: #0064bf;
  color: #FFF;
  font-family: "FontProximaNova", sans-serif;
  font-weight: 600;
  display: block;
  text-decoration: none;
  box-sizing: border-box;
`;

export const SidebarPhones = styled.div`
  padding: 24px 20px;
`;

export const SidebarPhonesLabel = styled.p`
  color: #FFF;
  font-family: "FontProximaNova", sans-serif;
  font-weight: 600;
  font-size: 11px;
`;

export const SidebarPhonesPhone = styled.p`
  color: #FFF;
  font-family: "FontProximaNova", sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin-top: 5px;
`;

export const SidebarPhonesInfo = styled.p`
  color: #FFF;
  font-family: "FontProximaNova", sans-serif;
  font-weight: normal;
  font-size: 12px;
  margin-top: 5px;
`;