import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
export const FailureViewImage = styled.img`
  width: 50%;
  max-width: 450px;
  margin-top: 30px;
  margin-bottom: 30px;
`
export const FailureMsg = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`

export const FailureSuggestion = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`

export const RetryButton = styled.button`
  height: 43px;
  width: 100px;
  border: none;
  border-radius: 4px;

  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;

  color: #ffffff;
  background-color: #4f46e5;
`
