import styled from 'styled-components';
import breakPoints from '@globalStyles/breakPoints';

export const Slide = styled.div`
  padding: 0 12px;
  box-sizing: border-box;

  @media screen and (max-width: ${ breakPoints.mobile }px) {
    padding: 0 5px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 15px;
  position: relative;

  .slick-list {
    margin: 0 -12px
  }

  .slick-slide, .slick-slide *{ outline: none !important; }

  @media screen and (max-width: ${ breakPoints.mobile }px) {
    .slick-slider {
      padding-bottom: 35px;
    }
  }
`;

export const DotsWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
  border: 1px solid #b8b8b8;
  background-color: #FFF;
`;

export const DotsList = styled.ul`
  display: flex;

  li {
    margin-right: 5px;
    
    :last-child {
      margin-right: 0;
    }

    &.slick-active {
      & ${ Dot } {
        background-color: #b8b8b8;
      }
    }
  }
`;
