import React from 'react';

import Header from '@components/Header';
import Menu from '@components/Menu';

import Container from '@globalStyles/Container';
import GlobalStyle from '@globalStyles/global';

const App = () => (
  <>
    <GlobalStyle />
    <Menu />
    <Header />
    <Container>
      <div>:)</div>
    </Container>
  </>
);

export default App;