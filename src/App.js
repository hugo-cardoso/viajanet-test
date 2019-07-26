import React from 'react';

import Header from '@components/Header';

import Container from '@globalStyles/Container';
import GlobalStyle from '@globalStyles/global';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Container>
      <div>:)</div>
    </Container>
  </>
);

export default App;