import React from 'react';

import Header from '@components/Header';
import MenuDesktop from '@components/MenuDesktop';

import Container from '@globalStyles/Container';
import GlobalStyle from '@globalStyles/global';

const App = () => (
  <>
    <GlobalStyle />
    <MenuDesktop />
    <Header />
    <Container>
      <div>:)</div>
    </Container>
  </>
);

export default App;