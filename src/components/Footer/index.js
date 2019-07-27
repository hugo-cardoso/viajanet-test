import React from 'react';
import Container from '@globalStyles/Container';
import {
  Wrapper,
  SiteMapColumn,
  SiteMap,
  SiteMapList,
  SiteMapListItem,
  SiteMapListTitle,
  SiteMapListItemLink,
  LogosBar,
  LogosBarColumn,
  LogosBarImage,
  LogosBarStoresWrapper,
  CopyrightBar,
  CopyrightBarText,
  NewsltetterBar
} from './style';

const FOOTER_ITEMS = [
  {
    title: "ViajaNet",
    items: [
      "Passagens Aéreas",
      "Pacotes de Viagens",
      "Hotéis",
      "Aplicativo ViajaNet",
      "Ranking ViajaNet",
      "Blog do ViajaNet",
      "Atendimento ao Cliente",
      "Trabalhe Conosco",
      "Termos de Uso",
      "Políticas de Privacidade"
    ]
  },{
    title: "Linhas Aéreas Nacionais",
    items: [
      "Gol",
      "Azul",
      "Hotéis",
      "Tam agora é Latam",
      "Avianca",
      "Passaredo"
    ]
  },{
    title: "Linhas Aéreas Internacionais",
    items: [
      "Aerolíneas Argentinas",
      "Air Canada",
      "American Airlines",
      "Copa Airlines",
      "Delta Air Lines",
      "Boliviana de Aviacion",
      "Delta Air Lines",
      "Alitalia",
      "Lufthansa",
      "South African",
      "Tap",
      "Turkish Airlines",
      "United Airlines"
    ]
  },{
    title: "Passagens Aéreas Nacionais",
    items: [
      "Passagem para São Paulo",
      "Passagem para Fortaleza",
      "Passagem para Salvador",
      "Passagens para Curitiba",
      "Passagens Aéreas Rio de Janeiro",
      "Passagens Aéreas para Recife",
      "Passagem para Maceió",
      "Passagens para Florianópolis",
      "Passagens para Foz do Iguaçu",
      "Passagens para Porto Alegre",
      "Passagens para Belo Horizonte",
      "Passagem para Brasilia"
    ]
  },{
    title: "Passagens Aéreas Internacionais",
    items: [
      "Passagens para Portugal",
      "Passagens para Orlando",
      "Passagem para Salvador",
      "Passagens para Cancun",
      "Passagens para Londres",
      "Passagens para Estados Unidos",
      "Passagem para Itália",
      "Passagens Aéreas para Buenos Aires",
      "Passagem para Las Vegas",
      "Passagens Aéreas para Miami",
      "Passagem para Paris",
      "Passagens para Lisboa",
      "Passagens Aéreas para Nova York"
    ]
  },{
    title: "QuandoViajar",
    items: [
      "Voos para Rio de Janeiro",
      "Voos para Salvador",
      "Voos para Fortaleza",
      "Voos para Miami",
      "Voos para Buenos Aires",
      "Voos para Orlando",
      "Voos para Nova York",
      "Voos para Santiago"
    ]
  }
];

const Footer = () => {
  return (
    <Wrapper>
      <NewsltetterBar />
      <Container>
        <SiteMap>
          {
            FOOTER_ITEMS.map(({title, items}) => (
              <SiteMapColumn key={ title }>
                <SiteMapListTitle>{ title }</SiteMapListTitle>
                <SiteMapList>
                  {
                    items.map((item, index) => (
                      <SiteMapListItem key={ index }>
                        <SiteMapListItemLink href="#">{ item }</SiteMapListItemLink>
                      </SiteMapListItem>
                    ))
                  }
                </SiteMapList>
              </SiteMapColumn>
            ))
          }
        </SiteMap>
        <LogosBar>
          <LogosBarColumn>
            <LogosBarImage src={ require('@images/selo-iata.svg') } />
            <LogosBarImage src={ require('@images/selo-brasil.svg') } />
            <LogosBarImage src={ require('@images/selo-abav.svg') } />
          </LogosBarColumn>
          <LogosBarColumn>
            <LogosBarImage src={ require('@images/selo-afiliado.png') } />
            <LogosBarStoresWrapper>
              <LogosBarImage src={ require('@images/selo-google-play.png') } />
              <LogosBarImage src={ require('@images/selo-app-store.png') } />
            </LogosBarStoresWrapper>
          </LogosBarColumn>
        </LogosBar>
        <CopyrightBar>
          <CopyrightBarText>TVLX Viagens e Turismo S.A. CNPJ: | 12.337.454/0001-31 | Rua Manoel Coelho, 600 - 1º andar - São Caetano do Sul- SP - CEP 09510-101</CopyrightBarText>
          <CopyrightBarText>© 2019 ViajaNet Viagens Online - Todos os direitos reservados</CopyrightBarText>
        </CopyrightBar>
      </Container>
    </Wrapper>
  );
}
 
export default Footer;