import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  height: 100vh;
  padding: 50px 10px 40px 10px;

  background-color: ${props => (props.theme === true ? '#ffffff' : '#231f20')};

  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginFormContainer = styled.form`
  width: 90%;
  max-width: 380px;
  padding: 30px;
  border: none;
  border-radius: 6px;
  box-shadow: 2px 2px 6px 6px
    ${props => (props.theme === true ? '#f4f4f4' : ' #181818')};

  background-color: ${props => (props.theme === true ? '#ffffff' : '#000000')};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const NxtWatchImage = styled.img`
  height: 40px;
  width: 160px;
  margin-bottom: 28px;

  align-self: center;
`
export const UsernameInputFieldContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: transparent;
`

export const LabelElement = styled.label`
  margin-bottom: 4px;

  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;

  color: ${props => (props.theme === true ? '#616e7c' : '#ffffff')};
`

export const UsernameInputElement = styled.input`
  width: 100%;
  height: 36px;
  padding: 6px;
  border: 1px solid ${props => (props.theme === true ? '#ebebeb' : '#475569')};
  border-radius: 4px;
  outline: none;

  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;

  color: ${props => (props.theme === true ? '#616e7c' : '#ffffff')};
  background-color: transparent;
`
export const ShowPasswordContainer = styled.div`
  margin-top: 6px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const ShowPasswordCheckbox = styled.input`
  height: 16px;
  width: 16px;
  margin-right: 8px;
  cursor: pointer;
`
export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;

  color: ${props => (props.theme === true ? '#0f0f0f' : '#ffffff')};
`

export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 6px;

  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;

  color: #ffffff;
  background-color: #3b82f6;
`
export const ErrorMSg = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;

  color: #ff0000;
`

export const PrefillMsg = styled(ErrorMSg)`
  font-size: 13px;

  color: #475569;
`
