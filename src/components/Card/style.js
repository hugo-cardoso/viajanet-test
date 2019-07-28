import styled from 'styled-components';

import economyIcon from '@images/icon-economia.svg';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  background-color: #FFF;
`;

export const Link = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;

  :hover {
    box-shadow: 0 0 10px rgba(0,0,0,.15);
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 160px;
  background-color: gray;
  background-image: url(${ ({background}) => background });
  background-size: cover;
  background-position: top center;
`;

export const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 15px;
  position: relative;
`;

export const TextType = styled.p`
  color: #7d7d7d;
  font-family: "FontProximaNova", sans-serif;
  font-weight: 600;
  font-size: 14px;
`;

export const TextDestination = styled.p`
  color: #000;
  font-family: "FontProximaNova", sans-serif;
  font-weight: 700;
  font-size: 16px;
  margin-top: 2px;
`;

export const PriceWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const TextLabelPrice = styled.p`
  color: #7d7d7d;
  font-family: "FontProximaNova", sans-serif;
  font-weight: 600;
  font-size: 12px;
  display: inline-block;
  text-transform: uppercase;
`;

export const TextPrice = styled.p`
  color: orange;
  font-family: "FontProximaNova", sans-serif;
  font-weight: 700;
  font-size: 20px;
  display: inline-block;
  text-transform: uppercase;
`;

export const TextPriceDescription = styled.p`
  color: #777;
  font-family: "FontProximaNova", sans-serif;
  font-weight: 700;
  font-size: 13px;
  margin-top: 10px;
`;

export const DatesWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const TextDate = styled.p`
  color: #555;
  font-family: "FontProximaNova", sans-serif;
  font-weight: 700;
  font-size: 14px;
  display: inline-block;
`;

export const TextDateDirection = styled.span`
  color: #7d7d7d;
  font-family: "FontProximaNova", sans-serif;
  font-weight: 700;
  font-size: 14px;
  display: inline-block;
  text-transform: uppercase;
  padding: 0 5px;
  box-sizing: border-box;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
`;

export const ButtonBuy = styled.a`
  width: 100%;
  height: 35px;
  border-radius: 3px;
  padding: 0 15px;
  background-color: #0164BE;
  color: #FFF;
  font-family: "FontProximaNova", sans-serif;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 10px;
`;

export const CompanyWrapper = styled.div`
  position: absolute;
  width: 50px;
  bottom: 55px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CompanyLogo = styled.img`
  height: 20px;
`;

export const CompanyName = styled.span`
  font-family: "FontProximaNova", sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #7d7d7d;
  margin-top: 3px;
`;

export const EconomyFlag = styled.div`
  position: absolute;
  width: 150px;
  height: 26px;
  /* padding-top: 3px; */
  padding-left: 42px;
  padding-right: 6px;
  box-sizing: border-box;
  right: -6px;
  top: 15px;
  background-color: #0164bf;
  z-index: 4;
  display: flex;
  justify-content: flex-end;
  background-image: url(${ economyIcon });
  background-repeat: no-repeat;
  background-position-x: 7px;
  background-position-y: center;

  ::before {
    content: '';
    width: 8px;
    position: absolute;
    height: 0;
    top: 0;
    left: -10px;
    border-top: 13px solid #0164bf;
    border-bottom: 13px solid #0164bf;
    border-right: 8px solid transparent;
    transform: rotate(180deg);
  }

  ::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -5px;
    border-top: 0 solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #01498c;
  }
`;

export const EconomyFlagLabel = styled.p`
  width: 54px;
  height: 100%;
  font-family: "FontProximaNova", sans-serif;
  font-weight: 600;
  font-size: 10px;
  color: #FFF;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  line-height: 9px;
`;

export const EconomyFlagPercent = styled.p`
  height: 100%;
  font-family: "FontProximaNova", sans-serif;
  font-weight: 700;
  font-size: 23px;
  color: #FFF;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin-right: 4px;
`;