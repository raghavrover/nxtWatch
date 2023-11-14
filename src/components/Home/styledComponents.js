import styled from 'styled-components'

export const HomePageContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#ebebeb' : '#181818')};
`

export const HomePageContent = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
`

export const HomeVideosContent = styled.div`
  width: 100%;

  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
  }
`

export const BuyPremiumCard = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`

export const BrandLogoContainer = styled.div`
  width: 100%;
  padding-top: 4px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const BrandImage = styled.img`
  height: 34px;
  width: 100px;
`

export const BuyPremiumDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;

  color: #181818;
`
export const GetItNowBtn = styled.button`
  height: 40px;
  padding: 8px 10px 10px 10px;
  border: 1px solid #000000;

  font-family: 'Roboto';
  font-size: 19px;
  font-weight: 500;

  color: #181818;
  background-color: transparent;
  transition: all 0.3s ease-in;

  :hover {
    background-color: #000000;
    color: #ffffff;
    transform: translateY(-5px);
  }
`
export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
`

export const VideosContainer = styled.div`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#ebebeb' : '#181818')};
`

export const SearchBarContainer = styled.div`
  height: 40px;
  width: 90%;
  max-width: 600px;
  margin: 0 12px 16px 12px;
  padding: 4px 0px 4px 10px;
  border: none;
  border-radius: 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#f5f6f7' : '#373837')};

  :hover {
    background-color: ${props =>
      props.theme === true ? '#ffffff' : '#474a47'};
  }
`
export const SearchInput = styled.input`
  height: 100%;
  width: 90%;
  padding-left: 8px;
  border: none;
  outline: none;

  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;

  color: ${props => (props.theme === true ? '#1e293b' : '#d7dfe9')};
  background-color: transparent;}
`

export const SearchIconButton = styled.button`
  height: 100%;
  min-width: 60px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideosList = styled.ul`
  padding-left: 0;
  width: 100%;
  margin-top: 0;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  @media screen and (min-width: 576px) {
    padding: 10px;
  }
`
export const LoaderContainer = styled.div`
  width: 100%;
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoVideosViewContainer = styled.div`
  width: 100%;
  height: 70%;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`
export const NoVideosImg = styled.img`
  width: 70%;
  max-width: 360px;
  margin-bottom: 20px;
`
export const NoVideosSuggestion = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`
