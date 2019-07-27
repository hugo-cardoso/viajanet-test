import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import FontProximaNovaRegular from '@fonts/ProximaNova-Regular_gdi.woff';
import FontProximaNovaSemiBold from '@fonts/ProximaNova-Semibold.woff';
import FontProximaNovaBold from '@fonts/ProximaNova-Bold_gdi.woff';

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
  body {overflow-x: hidden;}
  
  #app {
    width: 100%;
    overflow-x: hidden; 
    min-height: 100vh;
  }
`;