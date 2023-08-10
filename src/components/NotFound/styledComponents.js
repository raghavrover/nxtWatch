import styled from 'styled-components'

export const NotFoundPage = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const NotFoundContent = styled.div`
  width: 100%;
  height: calc(100vh - 60px);

  display: flex;
  justify-content: stretch;
  align-items: flex-start;
`
export const NotFoundResultContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#ffffff' : '#0f0f0f')};

  @media screen and (min-width: 768px) {
    width: 80%;
    flex-grow: 1;
  }
`
export const NotFoundImage = styled.img`
  width: 80%;
  max-width: 300px;
  margin-bottom: 20px;
`

export const NotFoundTitle = styled.h1`
  font-family: 'Roboto';
  font-size: ${props => (props.title ? '26px' : '16px')};
  font-weight: 400;
  line-height: 1;
  text-align: center;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`
