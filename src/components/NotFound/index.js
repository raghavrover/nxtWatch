import Header from '../Header'
import DesktopNavigationTabs from '../NavigationMenuContainer'
import {
  NotFoundPage,
  NotFoundContent,
  NotFoundResultContainer,
  NotFoundImage,
  NotFoundTitle,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isLightTheme} = value

      return (
        <NotFoundPage>
          <Header />
          <NotFoundContent>
            <DesktopNavigationTabs />
            <NotFoundResultContainer theme={isLightTheme}>
              <NotFoundImage
                src={
                  isLightTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundTitle theme={isLightTheme} title="true">
                Page Not Found
              </NotFoundTitle>
              <NotFoundTitle theme={isLightTheme} as="p">
                we are sorry, the page you requested could not be found.
              </NotFoundTitle>
            </NotFoundResultContainer>
          </NotFoundContent>
        </NotFoundPage>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default NotFound
