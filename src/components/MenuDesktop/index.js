import React from 'react';
import {
  Wrapper,
  Container,
  Column,
  LogoWrapper,
  LogoLink,
  Logo,
  Menu,
  MenuItem,
  MenuLink,
  PhoneButton,
  PhoneIcon,
  PhonePopup,
  PhonePopupItem,
  PhonePopupTextBig,
  PhonePopupTextSmall,
  AccountButton,
} from './style';

import logoImage from '@images/logo.svg';
import phoneIcon from '@images/phone-icon.svg';

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

const MenuDesktop = () => (
  <Wrapper>
    <Container>
      <Column>
        <LogoWrapper>
          <LogoLink
            target="_blank"
            href="https://www.viajanet.com.br/"
          >
            <Logo src={ logoImage }/>
          </LogoLink>
        </LogoWrapper>
        <Menu>
          {
            MENU_ITEMS.map(({label, link}) => (
              <MenuItem key={ label }>
                <MenuLink href={ link }>{ label }</MenuLink>
              </MenuItem>
            ))
          }
        </Menu>
      </Column>
      <Column align="right">
        <AccountButton href="#">Acesse ou Crie sua conta</AccountButton>
        <PhoneButton>
          <PhoneIcon src={ phoneIcon }/>
          Ligue
          <PhonePopup>
            <PhonePopupItem>
              <PhonePopupTextBig>4007-1510</PhonePopupTextBig>
              <PhonePopupTextSmall>Regiões Metropolitanas</PhonePopupTextSmall>
            </PhonePopupItem>
            <PhonePopupItem>
              <PhonePopupTextBig>(11) 4007-1510</PhonePopupTextBig>
              <PhonePopupTextSmall>Demais Regiões</PhonePopupTextSmall>
            </PhonePopupItem>
          </PhonePopup>
        </PhoneButton>
      </Column>
    </Container>
  </Wrapper>
);

export default MenuDesktop;