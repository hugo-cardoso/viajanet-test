import React, { useState, useEffect } from 'react';
import * as DeviceHelper from '@helpers/deviceHelper';
import {
  Wrapper,
  LogoLink,
  Logo,
  ButtonToggleSidebar,
  ButtonToggleSidebarIcon,
  SideBarWrapper,
  Sidebar,
  Menu,
  MenuItem,
  MenuLink,
  SidebarButtonAccount,
  SidebarButtonReservations,
  SidebarPhones,
  SidebarPhonesLabel,
  SidebarPhonesPhone,
  SidebarPhonesInfo
} from './style';

import logoImage from '@images/logo.svg';
import menuIcon from '@images/menu.svg';
import closeIcon from '@images/close.svg';

const MENU_ITEMS = [
  {
    label: "Passagens Aéreas",
    link: "https://www.viajanet.com.br/passagens-aereas"
  },{
    label: "Pacote de Viagem",
    link: "https://www.viajanet.com.br/pacotes-viagens"
  },{
    label: "Hotéis",
    link: "http://hoteis.viajanet.com.br"
  },{
    label: "Carros",
    link: "http://carros.viajanet.com.br/"
  },{
    label: "Seguros",
    link: "https://www.viajanet.com.br/seguros"
  },{
    label: "QuandoViajar",
    link: "https://www.viajanet.com.br/passagens-aereas/quandoviajar"
  },{
    label: "Atendimento",
    link: "https://atendimento.viajanet.com.br/"
  }
];

const MenuMobile = () => {
  const [sideIsOpen, setSidebarState] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if( DeviceHelper.isDesktop() && sideIsOpen ) setSidebarState(false);
    });
  });

  return (
    <Wrapper>
      <LogoLink>
        <ButtonToggleSidebar onClick={() => setSidebarState(!sideIsOpen)}>
          <ButtonToggleSidebarIcon src={ sideIsOpen ? closeIcon : menuIcon } />
        </ButtonToggleSidebar>
        <Logo src={ logoImage } />
      </LogoLink>
      <SideBarWrapper active={ sideIsOpen }>
        <Sidebar>
          <SidebarButtonAccount href="#">Acesse ou Crie sua conta</SidebarButtonAccount>
          <Menu>
            {
              MENU_ITEMS.map(({label, link}) => (
                <MenuItem key={ label }>
                  <MenuLink href={ link }>{ label }</MenuLink>
                </MenuItem>
              ))
            }
          </Menu>
          <SidebarButtonReservations href="#">Minhas reservas</SidebarButtonReservations>
          <SidebarPhones>
            <SidebarPhonesLabel>LIGUE</SidebarPhonesLabel>
            <SidebarPhonesPhone>4007-1510</SidebarPhonesPhone>
            <SidebarPhonesInfo>Regiões Metropolitanas</SidebarPhonesInfo>
            <SidebarPhonesPhone>(11) 4007-1510</SidebarPhonesPhone>
            <SidebarPhonesInfo>Demais Regiões</SidebarPhonesInfo>
          </SidebarPhones>
        </Sidebar>
      </SideBarWrapper>
    </Wrapper>
  )
};

export default MenuMobile;