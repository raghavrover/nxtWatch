import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import DesktopNavigationTabs from '../NavigationMenuContainer'
import SavedVideoItemCard from '../SavedVideoItemCard'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SavedVideosPageContainer,
  SavedVideosTabHeader,
  SavedListIconContainer,
  SavedVideosTitle,
  SavedVideosList,
  SavedVideosContainer,
  SavedVideosContent,
  NoSavedVideosViewContainer,
  NoSavedVideosHeading,
  NoSavedVideosImg,
  NoSavedVideosSuggestion,
} from './styledComponents'

const SavedVideos = () => {
  const renderSavedVideosTab = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <SavedVideosTabHeader theme={isLightTheme}>
            <SavedListIconContainer theme={isLightTheme}>
              <MdPlaylistAdd height={30} width={30} color="red" />
            </SavedListIconContainer>
            <SavedVideosTitle theme={isLightTheme}>
              Saved Videos
            </SavedVideosTitle>
          </SavedVideosTabHeader>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const renderAllSavedVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {savedVideosList} = value
        return (
          <SavedVideosList>
            {savedVideosList.map(eachItem => (
              <SavedVideoItemCard key={eachItem.id} videoDetails={eachItem} />
            ))}
          </SavedVideosList>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const renderNoVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <NoSavedVideosViewContainer>
            <NoSavedVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedVideosHeading theme={isLightTheme}>
              No saved videos found
            </NoSavedVideosHeading>
            <NoSavedVideosSuggestion theme={isLightTheme}>
              You can save your videos while watching them
            </NoSavedVideosSuggestion>
          </NoSavedVideosViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const renderSavedVideosView = () => (
    <>
      {renderSavedVideosTab()}
      {renderAllSavedVideos()}
    </>
  )

  const renderSavedVideosContainer = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {savedVideosList, isLightTheme} = value
        const listLength = savedVideosList.length

        return (
          <SavedVideosContainer theme={isLightTheme}>
            {listLength > 0 ? renderSavedVideosView() : renderNoVideosView()}
          </SavedVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <SavedVideosPageContainer
            theme={isLightTheme}
            data-testid="savedVideos"
          >
            <Header />
            <SavedVideosContent>
              <DesktopNavigationTabs />
              {renderSavedVideosContainer()}
            </SavedVideosContent>
          </SavedVideosPageContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default SavedVideos
