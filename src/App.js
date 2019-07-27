import React from 'react';

import Header from '@components/Header';
import Menu from '@components/Menu';
import CardLine from '@components/CardLine';

import Container from '@globalStyles/Container';
import GlobalStyle from '@globalStyles/global';

import "slick-carousel/slick/slick.css";

import promotionsMock from './promotionsMock';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <Menu />
      <Header />
      <Container>
        <CardLine cards={ promotionsMock }/>
      </Container>
    </>
  )
};

export default App;