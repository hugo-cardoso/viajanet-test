import React, { useState, useEffect } from 'react';

import * as viajanetService from '@services/viajanetService';

import Header from '@components/Header';
import Menu from '@components/Menu';
import CardLine from '@components/CardLine';

import Container from '@globalStyles/Container';
import GlobalStyle from '@globalStyles/global';

import "slick-carousel/slick/slick.css";

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
        <CardLine cards={ airlinePromotions }/>
      </Container>
    </>
  )
};

export default App;