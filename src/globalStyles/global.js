import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import FontProximaNovaRegular from '@fonts/ProximaNova-Regular_gdi.woff';
import FontProximaNovaSemiBold from '@fonts/ProximaNova-Semibold.woff';
import FontProximaNovaBold from '@fonts/ProximaNova-Bold_gdi.woff';

import breakPoints from './breakPoints';

export default createGlobalStyle`
  ${ reset }

  @font-face {
    font-family: FontProximaNova;
    src: url(${ FontProximaNovaRegular });
    font-weight: 500;
  }

  @font-face {
    font-family: FontProximaNova;
    src: url(${ FontProximaNovaSemiBold });
    font-weight: 600;
  }

  @font-face {
    font-family: FontProximaNova;
    src: url(${ FontProximaNovaBold });
    font-weight: 700;
  }
  body {
    overflow-x: hidden;

    @media screen and (max-width: ${ breakPoints.tablet }px) {
      padding-top: 60px;
    }
  }
  
  #app {
    width: 100%;
    overflow-x: hidden; 
    min-height: 100vh;
  }
`;

export const MainTitle = styled.h2`
  font-family: "FontProximaNova", sans-serif;
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  line-height: 33px;
  margin-top: 20px;

  span {
    color: #0164bf;
    white-space: nowrap;
  }

  @media screen and (max-width: ${ breakPoints.mobile }px) {
    padding: 0 10px;
    box-sizing: border-box;
  }
`;