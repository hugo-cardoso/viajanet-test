import styled from 'styled-components';
import breakPoints from '@globalStyles/breakPoints';

export default styled.div`
  width: 100%;
  max-width: 1230px;
  margin: 0 auto;
  
  @media screen and (max-width: ${ breakPoints.tablet }px) {
    padding: 0 5px;
  }
`;