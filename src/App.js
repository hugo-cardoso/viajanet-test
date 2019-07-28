import React, { useState, useEffect } from 'react';

import * as viajanetService from '@services/viajanetService';

import Header from '@components/Header';
import Menu from '@components/Menu';
import CardLine from '@components/CardLine';
import Footer from '@components/Footer/index';

import Container from '@globalStyles/Container';
import GlobalStyle, { MainTitle } from '@globalStyles/global';

const App = () => {
  const [airlinePromotions, setAirlinePromotions] = useState([]);

  useEffect(() => {
    viajanetService
      .getAirlinePromotions()
      .then(res => setAirlinePromotions(res));
  });

  return (
    <>
      <GlobalStyle />
      <Menu />
      <Header />
      <Container>
        <MainTitle>Destinos com maior economia saindo de <span>São Paulo</span></MainTitle>
        <CardLine cards={ airlinePromotions }/>
      </Container>
      <Footer />
    </>
  )
};

export default App;