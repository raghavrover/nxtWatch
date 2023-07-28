import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../context/NxtWatchContext'
import {LoaderContainer} from './styledComponents'

const LoaderView = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isLightTheme} = value
      return (
        <LoaderContainer data-testid="loader">
          <Loader
            type="ThreeDots"
            height="50"
            width="50"
            color={isLightTheme ? '#000000' : '#ffffff'}
          />
        </LoaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default LoaderView
