import styled from 'styled-components';
import breakPoints from '@globalStyles/breakPoints';

export const Slide = styled.div`
  padding: 0 12px;
  box-sizing: border-box;

  @media screen and (max-width: ${ breakPoints.mobile }px) {
    padding: 0 5px;
  }
`;

export const Card = styled.div`
  height: 100px;
  background-color: red;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 15px;

  .slick-list {
    margin: 0 -12px
  }

  .slick-slide, .slick-slide *{ outline: none !important; }
`;