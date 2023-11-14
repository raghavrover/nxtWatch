import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoginPageContainer,
  LoginFormContainer,
  NxtWatchImage,
  UsernameInputFieldContainer,
  LabelElement,
  UsernameInputElement,
  ShowPasswordCheckbox,
  ShowPasswordContainer,
  ShowPasswordLabel,
  LoginButton,
  PrefillMsg,
  ErrorMSg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
    isLoginSuccessful: true,
    showPassword: false,
    errorMsg: '',
  }

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  authenticateUser = async () => {
    const {username, password} = this.state
    const userDetailsObject = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const body = JSON.stringify(userDetailsObject)

    try {
      //   Data Posting through axios
      const response = await axios.post(url, body)
      const {data} = response
      const jwtToken = data.jwt_token

      //   Setting Up Cookies
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      //   Directing user to Home page
      history.replace('/')
    } catch (error) {
      const errorMsg = error?.response?.data?.error_msg
      console.log(errorMsg)
      this.setState({errorMsg, isLoginSuccessful: false})
    }
  }

  onFormSubmit = event => {
    event.preventDefault()
    this.authenticateUser()
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderUsernameInputField = () => {
    const {username} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLightTheme} = value

          return (
            <UsernameInputFieldContainer theme={isLightTheme}>
              <LabelElement theme={isLightTheme} htmlFor="username">
                USERNAME
              </LabelElement>
              <UsernameInputElement
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={this.getUsername}
                theme={isLightTheme}
                autoComplete="true"
              />
            </UsernameInputFieldContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderPasswordInputField = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLightTheme} = value
          return (
            <UsernameInputFieldContainer theme={isLightTheme}>
              <LabelElement theme={isLightTheme} htmlFor="password">
                PASSWORD
              </LabelElement>
              <UsernameInputElement
                type={inputType}
                id="password"
                placeholder="Password"
                value={password}
                onChange={this.getPassword}
                theme={isLightTheme}
                autoComplete="true"
              />
              <ShowPasswordContainer>
                <ShowPasswordCheckbox
                  type="checkbox"
                  id="pwdCheckbox"
                  onChange={this.toggleShowPassword}
                />
                <ShowPasswordLabel htmlFor="pwdCheckbox" theme={isLightTheme}>
                  Show Password
                </ShowPasswordLabel>
              </ShowPasswordContainer>
            </UsernameInputFieldContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  render() {
    const {isLoginSuccessful, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLightTheme} = value
          return (
            <LoginPageContainer theme={isLightTheme}>
              <LoginFormContainer
                onSubmit={this.onFormSubmit}
                theme={isLightTheme}
              >
                <NxtWatchImage
                  src={
                    isLightTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />
                {this.renderUsernameInputField()}
                {this.renderPasswordInputField()}
                <LoginButton type="submit" theme={isLightTheme}>
                  Login
                </LoginButton>
                <PrefillMsg>
                  Login and explore with pre-filled credentials
                </PrefillMsg>
                {!isLoginSuccessful && <ErrorMSg>*{errorMsg}</ErrorMSg>}
              </LoginFormContainer>
            </LoginPageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
