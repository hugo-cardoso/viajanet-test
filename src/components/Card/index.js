import React from 'react';
import {
  Wrapper,
  Link,
  ButtonBuy,
  Content,
  Thumbnail,
  TextType,
  TextDestination,
  TextLabelPrice,
  TextPrice,
  TextPriceDescription,
  PriceWrapper,
  CompanyWrapper,
  CompanyLogo,
  CompanyName,
  EconomyFlag,
  EconomyFlagLabel,
  EconomyFlagPercent,
  DatesWrapper,
  TextDate,
  TextDateDirection
} from './style';

const Card = ({
  discountPercent,
  thumbnailUrl,
  type,
  title,
  price,
  companyName,
  companyLogo,
  url,
  dates
}) => (
  <Wrapper>
    <Link href={ url }/>
    <EconomyFlag>
      <EconomyFlagPercent>{ discountPercent }%</EconomyFlagPercent>
      <EconomyFlagLabel>De economia</EconomyFlagLabel>
    </EconomyFlag>
    <Thumbnail background={ thumbnailUrl } />
    <Content>
      <TextType>{ type }</TextType>
      <TextDestination>{ title }</TextDestination>
      <DatesWrapper>
        <TextDate>
          <TextDateDirection>IDA</TextDateDirection> { dates.going.day } { dates.going.month } <TextDateDirection>VOLTA</TextDateDirection> { dates.return.day } { dates.return.month }
        </TextDate>
      </DatesWrapper>
      <PriceWrapper>
        <TextLabelPrice>A partir de:</TextLabelPrice><TextPrice>R${ price }</TextPrice>
      </PriceWrapper>
      <TextPriceDescription>Preço Final, taxas inclusas!</TextPriceDescription>
      <ButtonBuy>Comprar agora!</ButtonBuy>
      <CompanyWrapper>
        <CompanyLogo src={ companyLogo } />
        <CompanyName>{ companyName }</CompanyName>
      </CompanyWrapper>
    </Content>
  </Wrapper>
);

export default Card;