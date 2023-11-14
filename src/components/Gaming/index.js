import {Component} from 'react'
import Cookies from 'js-cookie'
import {GiGamepad} from 'react-icons/gi'
import axios from 'axios'
import Header from '../Header'
import DesktopNavigationTabs from '../NavigationMenuContainer'
import LoaderView from '../Loader'
import FailureView from '../FailureView'
import GameItemCard from '../GameItemCard'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  GamingPageContainer,
  GamingTabHeader,
  GamingTabIconContainer,
  GamingTitle,
  GamesList,
  GamesPageContent,
  GamesContainer,
} from './styledComponents'

const apiFetchStatus = {
  initial: 'INITIAL',
  fetching: 'FETCHING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {apiStatus: apiFetchStatus.initial, gamesList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiFetchStatus.fetching})

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken} `,
      },
    }

    try {
      // Data Fetching through axios
      const response = await axios.get(url, options)
      const {data} = response
      const {videos} = data

      const formattedVideosData = videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        gamesList: formattedVideosData,
        apiStatus: apiFetchStatus.success,
      })
    } catch (err) {
      this.setState({apiStatus: apiFetchStatus.failure})
      console.log(err?.response?.data?.error_msg)
    }
  }

  retry = () => {
    this.getGamingVideos()
  }

  renderGamingTab = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <GamingTabHeader theme={isLightTheme}>
            <GamingTabIconContainer theme={isLightTheme}>
              <GiGamepad height="50" width="50" color="red" />
            </GamingTabIconContainer>
            <GamingTitle theme={isLightTheme}>Gaming</GamingTitle>
          </GamingTabHeader>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailureView = () => <FailureView reload={this.retry} />

  renderLoaderView = () => <LoaderView />

  renderGames = () => {
    const {gamesList} = this.state
    return (
      <GamesList>
        {gamesList.map(eachItem => (
          <GameItemCard key={eachItem.id} gameDetails={eachItem} />
        ))}
      </GamesList>
    )
  }

  renderGamesContainer = () => (
    <GamesContainer>
      {this.renderGamingTab()}
      {this.renderGamesView()}
    </GamesContainer>
  )

  renderGamesView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiFetchStatus.failure:
        return this.renderFailureView()

      case apiFetchStatus.fetching:
        return this.renderLoaderView()

      case apiFetchStatus.success:
        return this.renderGames()

      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLightTheme} = value

          return (
            <GamingPageContainer theme={isLightTheme} data-testid="gaming">
              <Header />
              <GamesPageContent>
                <DesktopNavigationTabs />
                {this.renderGamesContainer()}
              </GamesPageContent>
            </GamingPageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
