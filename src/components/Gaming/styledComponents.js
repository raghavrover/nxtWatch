import styled from 'styled-components'

export const GamingPageContainer = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#ebebeb' : '#0f0f0f')};
`

export const GamingTabHeader = styled.div`
  width: 100%;
  padding: 16px;
  height: 80px;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#f1f1f1' : '#231f20')};

  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const GamingTabIconContainer = styled.div`
  height: 60px;
  width: 60px;
  border: none;
  border-radius: 30px;
  margin-right: 14px;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#d7dfe9' : '#000000')};

  display: flex;
  justify-content: center;
  align-items: center;
`

export const GamingTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 500;
  line-height: 1.4;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const LoaderContainer = styled.div`
  width: 100%;
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const GamesPageContent = styled.div`
  height: calc(100vh - 60px);
  width: 100%;

  display: flex;
  justify-content: stretch;
  align-items: flex-start;
`

export const GamesContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const GamesList = styled.ul`
  width: 98%;
  padding-left: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
`
