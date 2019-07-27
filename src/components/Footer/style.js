import styled from 'styled-components';
import breakPoints from '@globalStyles/breakPoints';

export const Wrapper = styled.footer`
  width: 100%;
  box-sizing: border-box;
  background-color: #f7f7f7;
`;

export const SiteMap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
  padding: 30px;

  @media screen and (max-width: ${ breakPoints.mobile }px) {
    display: none;
  }
`;

export const SiteMapColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SiteMapList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SiteMapListItem = styled.li`
  width: 100%;
`;

export const SiteMapListItemLink = styled.a`
  font-family: "FontProximaNova", sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: rgb(125, 125, 125);
  text-decoration: none;

  :hover {text-decoration: underline;}
`;

export const SiteMapListTitle = styled.p`
  font-family: "FontProximaNova", sans-serif;
  color: rgb(125, 125, 125);
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  height: 45px;
`;

export const LogosBar = styled.div`
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(225, 225, 225);
  border-bottom: 1px solid rgb(225, 225, 225);

  @media screen and (max-width: ${ breakPoints.mobile }px) {
    flex-direction: column;
    padding: 0;
    border-top: 0;
  }
`;

export const LogosBarColumn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${ breakPoints.mobile }px) {
    justify-content: space-evenly;
    padding: 20px 0;
    box-sizing: border-box;

    :last-child {
      border-top: 1px solid rgb(225, 225, 225);
    }
  }
`;

export const LogosBarImage = styled.img`
  margin-right: 30px;

  :last-child {
    margin-right: 0;
  }

  @media screen and (max-width: ${ breakPoints.mobile }px) {
    margin-right: 5px;
  }
`;

export const LogosBarStoresWrapper = styled.div`
  display: flex;
  align-items: center;

  & ${  LogosBarImage} {
    margin-right: 5px;
  }

  @media screen and (max-width: ${ breakPoints.mobile }px) {
    justify-content: center;
    flex-direction: column;

    & ${ LogosBarImage } {
      margin-right: 0;
      margin-top: 5px;
    }
  }
`;

export const CopyrightBar = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;

export const CopyrightBarText = styled.p`
  width: 100%;
  font-family: "FontProximaNova", sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #7d7d7d;
  width: 100%;
  text-align: center;
  line-height: 20px;
`;

export const NewsltetterBar = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgb(1, 100, 191);
`;