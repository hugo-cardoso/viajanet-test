import React, { useState } from 'react';
import * as DeviceHelper from '@helpers/deviceHelper';
import {
  Wrapper,
  Panel,
  PanelTabs,
  PanelTab
} from './style';

const TAB_ITEMS = [
  DeviceHelper.isMobile() ? "Passagens" : "Passagens Aéreas",
  "Pacotes",
  "Hotéis",
  "Carros"
];

const Header = () => {
  const [tabActive, setTabActive] = useState(0);

  return (
    <Wrapper>
      <Panel>
        <PanelTabs>
          {
            TAB_ITEMS.map((tab, index) => (
              <PanelTab
                key={ tab }
                onClick={() => setTabActive(index)}
                active={ tabActive == index }
              >{ tab }</PanelTab>
            ))
          }
        </PanelTabs>
        { TAB_ITEMS[tabActive] }
      </Panel>
    </Wrapper>
  )
};

export default Header;