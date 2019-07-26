import styled from 'styled-components';
import ContanerBase from '@globalStyles/Container';

import arrowDown from '@images/arrow-down.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #FFF;
  display: flex;
`;

export const Container = styled(ContanerBase)`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

export const Column = styled.div`
  height: 100%;
  display: flex;
  justify-content: ${({align}) => align == 'right' ? 'flex-end' : 'flex-start'};
  align-items: center;
`;

export const LogoWrapper = styled.div`
  width: 142px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LogoLink = styled.a``;

export const Logo = styled.img`
  width: 106px;
  display: block;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
`;

export const MenuItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 8px;
  color: #555;
  font-size: 14px;
  font-weight: 600;
  font-family: "FontProximaNova", sans-serif;
  text-decoration: none;

  :hover{color: #0064bf;}
`;

export const PhonePopup = styled.div`
  position: absolute;
  top: calc(70%);
  right: 0;
  width: 220px;
  background-color: #FFF;
  display: none;
  border-radius: 3px;
  box-shadow: #666 0 0 24px;
  flex-direction: column;
  z-index: 2;
`;

export const PhonePopupItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
`;

export const PhonePopupTextBig = styled.span`
  font-family: "FontProximaNova", sans-serif;
  font-weight: 700;
  color: #0064bf;
  font-size: 32px;
`;

export const PhonePopupTextSmall = styled.span`
  font-family: "FontProximaNova", sans-serif;
  color: #7D7D7D;
  font-size: 14px;
`;

export const PhoneButton = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  font-family: "FontProximaNova", sans-serif;
  color: #555;
  background-image: url(${ arrowDown });
  background-position: center right;
  background-repeat: no-repeat;
  padding-right: 15px;
  padding-left: 12px;
  position: relative;

  ::after {
    content: '';
    width: 1px;
    height: 25px;
    background: #DDD;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  :hover {
    color: #0064bf;

    & ${ PhonePopup } {
      display: flex;
    }
  }
`;

export const PhoneIcon = styled.img`
  margin-right: 5px;
`;

export const AccountButton = styled.a`
  display: flex;
  height: 100%;
  width: 90px;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  font-family: "FontProximaNova", sans-serif;
  color: #555;
  background-position: center right;
  background-repeat: no-repeat;
  padding-right: 12px;
  text-align: right;
  text-decoration: none;

  :hover{color: #0064bf;}
`;