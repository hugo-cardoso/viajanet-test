import styled from 'styled-components';
import breakPoints from '@globalStyles/breakPoints';

const TAB_HEIGHT = {
  mobile: 50,
  desktop: 45
};

export const Wrapper = styled.div`
  width: 100%;
  height: 560px;
  background-color: #e1e1e1;
  background-image: url('https://www.viajanet.com.br/static/assets/platform/img/catalog/SIN/singapura-motor.jpg');
  background-position: top center;
  background-size: cover;
  box-shadow: inset 0 -149px 70px -15px rgba(0,0,0,.65);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${ breakPoints.tablet }px) {
    padding: 0 10px;
    box-sizing: border-box;
    background-image: initial;
    box-shadow: initial;
  }

  @media screen and (max-width: ${ breakPoints.mobile }px) {
    height: auto;
    padding: 0;
    padding-bottom: 30px;
  }
`;

export const Panel = styled.div`
  width: 100%;
  max-width: 980px;
  height: 346px;
  background: rgba(1,100,191,.8);
  border-radius: 0 4px 4px 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-family: 'FontProximaNova', sans-serif;
  font-size: 16px;

  @media screen and (max-width: ${ breakPoints.mobile }px) {
    border-radius: 0;
    margin-top: ${ TAB_HEIGHT.mobile }px;
    min-height: 346px;
    height: auto;
    background-color: #0e64c1;
  }
`;

export const PanelTabs = styled.div`
  display: flex;
  position: absolute;
  bottom: 100%;
  left: 0;

  @media screen and (max-width: ${ breakPoints.mobile }px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const PanelTab = styled.div`
  background-color: ${ ({active}) => active ? 'rgba(1,100,191,.8)' : 'rgba(0,73,135,.9)' };
  height: ${ TAB_HEIGHT.desktop }px;
  padding: 0 20px;
  border-radius: 3px 3px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  cursor: pointer;
  font-family: 'FontProximaNova', sans-serif;
  font-size: 16px;
  margin-right: 1px;

  :last-child { margin-right: 0px;}

  :hover {background-color: rgba(1,100,191,.8);}

  @media screen and (max-width: ${ breakPoints.mobile }px) {
    background-color: ${ ({active}) => active ? '#0e64c1' : 'rgba(0,73,135,.9)' };
    width: 25%;
    height: ${ TAB_HEIGHT.mobile }px;
    margin-right: 0;
    border-radius: 0;
    font-size: 10px;
    padding: 0 10px;

    :hover {background-color: #0e64c1;}
  }
`;