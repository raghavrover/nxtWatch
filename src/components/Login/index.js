import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
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
  ErrorMSg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
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
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetailsObject),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg, isLoginSuccessful: false})
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
