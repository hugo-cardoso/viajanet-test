import styled from 'styled-components';
import breakPoints from '@globalStyles/breakPoints';

export default styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  
  @media screen and (max-width: ${ breakPoints.tablet }px) {
    box-sizing: border-box;
    padding: 0 5px;
  }
`;