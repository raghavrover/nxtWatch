import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiTwotoneFire} from 'react-icons/ai'
import axios from 'axios'
import Header from '../Header'
import DesktopNavigationTabs from '../NavigationMenuContainer'
import LoaderView from '../Loader'
import FailureView from '../FailureView'
import TrendingVideoItemCard from '../TrendingVideoItemCard'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingPageContainer,
  TrendingTabHeader,
  TrendingTabIconContainer,
  TrendingTitle,
  TrendingVideosList,
  TrendingVideosContainer,
  TrendingVideosContent,
} from './styledComponents'

const apiFetchStatus = {
  initial: 'INITIAL',
  fetching: 'FETCHING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {apiStatus: apiFetchStatus.initial, videosList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiFetchStatus.fetching})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await axios.get(url, options)
      const {data} = response
      const {videos} = data

      const formattedVideosData = videos.map(eachItem => ({
        channel: eachItem.channel,
        id: eachItem.id,
        title: eachItem.title,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        apiStatus: apiFetchStatus.success,
        videosList: formattedVideosData,
      })
    } catch (err) {
      this.setState({apiStatus: apiFetchStatus.failure})
      console.log(err?.response?.data?.error_msg)
    }
  }

  retry = () => {
    this.getTrendingVideos()
  }

  renderTrendingTab = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <TrendingTabHeader theme={isLightTheme}>
            <TrendingTabIconContainer theme={isLightTheme}>
              <AiTwotoneFire height={40} width={40} color="red" />
            </TrendingTabIconContainer>
            <TrendingTitle theme={isLightTheme}>Trending</TrendingTitle>
          </TrendingTabHeader>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailureView = () => <FailureView reload={this.retry} />

  renderLoaderView = () => <LoaderView />

  renderTrendingVideos = () => {
    const {videosList} = this.state
    return (
      <TrendingVideosList>
        {videosList.map(eachItem => (
          <TrendingVideoItemCard key={eachItem.id} videoDetails={eachItem} />
        ))}
      </TrendingVideosList>
    )
  }

  renderTrendingVideosContainer = () => (
    <TrendingVideosContainer>
      {this.renderTrendingTab()}
      {this.renderTrendingVideosView()}
    </TrendingVideosContainer>
  )

  renderTrendingVideosView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiFetchStatus.failure:
        return this.renderFailureView()

      case apiFetchStatus.fetching:
        return this.renderLoaderView()

      case apiFetchStatus.success:
        return this.renderTrendingVideos()

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
            <TrendingPageContainer theme={isLightTheme} data-testid="trending">
              <Header />
              <TrendingVideosContent>
                <DesktopNavigationTabs />
                {this.renderTrendingVideosContainer()}
              </TrendingVideosContent>
            </TrendingPageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
