import React from 'react';
import Card from '@components/Card';
import Slider from "react-slick";
import {
  Wrapper,
  Slide,
  DotsWrapper,
  DotsList,
  Dot
} from './style';

import breakPoints from '@globalStyles/breakPoints';

import "slick-carousel/slick/slick.css";

const SLIDE_SETTINGS = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: breakPoints.mobile,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20px',
      }
    }
  ],
  appendDots: dots => (
    <DotsWrapper>
      <DotsList>{dots}</DotsList>
    </DotsWrapper>
  ),
  customPaging: () => <Dot />
};

const CardLine = ({cards}) => (
  <Wrapper>
    <Slider {...SLIDE_SETTINGS}>
      {
        cards.map(({
          discountPercent,
          thumbnailUrl,
          type,
          title,
          price,
          company,
          url,
          dates
        }, index) => (
          <Slide key={ index }>
            <Card
              type={ type }
              title={ title }
              price={ price }
              companyLogo={ company.logo }
              companyName={ company.name }
              discountPercent={ discountPercent }
              thumbnailUrl={ thumbnailUrl }
              url={ url }
              dates={ dates }
            />
          </Slide>
        ))
      }
    </Slider>
  </Wrapper>
);

export default CardLine;