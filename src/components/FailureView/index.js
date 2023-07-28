import NxtWatchContext from '../../context/NxtWatchContext'
import {
  FailureViewContainer,
  FailureViewImage,
  FailureMsg,
  FailureSuggestion,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {reload} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <FailureViewContainer>
            <FailureViewImage
              src={
                isLightTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              }
              alt="failure view"
            />
            <FailureMsg theme={isLightTheme}>
              Oops! Something Went Wrong
            </FailureMsg>
            <FailureSuggestion theme={isLightTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureSuggestion>
            <RetryButton type="button" onClick={reload}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
