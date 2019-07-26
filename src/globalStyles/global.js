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
    font-weight: normal;
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
`;