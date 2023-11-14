import {Component} from 'react'
import Cookies from 'js-cookie'
import {MdClose, BiSearchAlt2} from 'react-icons/all'
import axios from 'axios'
import Header from '../Header'
import HomeVideoItemCard from '../HomeVideoItemCard'
import DesktopNavigationTabs from '../NavigationMenuContainer'
import LoaderView from '../Loader'
import FailureView from '../FailureView'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HomePageContainer,
  HomePageContent,
  HomeVideosContent,
  BuyPremiumCard,
  BrandLogoContainer,
  BrandImage,
  BuyPremiumDescription,
  GetItNowBtn,
  CloseBtn,
  SearchBarContainer,
  SearchInput,
  SearchIconButton,
  VideosContainer,
  VideosList,
  NoVideosViewContainer,
  NoVideosHeading,
  NoVideosImg,
  NoVideosSuggestion,
} from './styledComponents'
import './index.css'

const apiFetchStatus = {
  initial: 'INITIAL',
  fetching: 'FETCHING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

//   Implementing Debounce Functionality
const myDebounce = (callBack, timer) => {
  let timerId
  // Debounce function
  const debFun = () => {
    // If there is a previous timerId(previous 'change' event is triggered)
    // we're clearing it before it executes, incase if it is not executed.
    if (timerId) clearTimeout(timerId)

    // Adding a new timer with a call back function
    timerId = setTimeout(() => {
      callBack()
    }, timer)
  }

  return debFun
}

class Home extends Component {
  state = {
    searchQuery: '',
    videosList: [],
    apiStatus: apiFetchStatus.initial,
  }

  // To hold previous controller value
  previousController = null

  // 'sendVideoDataRequest' forms a closure with 'myDebounce' function
  sendVideoDataRequest = myDebounce(() => this.fetchVideos(), 500)

  // Abort Controller Instance to keep track of http requests

  componentDidMount() {
    this.fetchVideos()
  }

  componentWillUnmount() {
    this.previousController.abort()
  }

  fetchVideos = async () => {
    this.setState({apiStatus: apiFetchStatus.fetching})

    // Creating a fresh `AbortController` instance for every HTTP request and
    // passing the `signal` object of the `controller` as a value to the
    // signal property in axios configuration
    const controller = new AbortController()
    this.previousController = controller

    const jwtToken = Cookies.get('jwt_token')
    const {searchQuery} = this.state

    const url = `https://apis.ccbp.in/videos/all?search=${searchQuery}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      signal: controller.signal,
    }

    try {
      // Fetching Videos through  Axios
      const response = await axios.get(url, options)
      const {data} = response
      const {videos} = data

      const formattedVideosData = videos.map(eachItem => ({
        channel: eachItem.channel,
        id: eachItem.id,
        title: eachItem.title,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        viewsCount: eachItem.view_count,
      }))

      this.setState({
        videosList: formattedVideosData,
        apiStatus: apiFetchStatus.success,
      })
    } catch (err) {
      // Handling the error that raised due to 'request abortion' and returning from the function to not to execute the rest of the function body
      if (axios.isCancel(err)) {
        console.log(`Request ${err.message}`)
        return
      }

      //   Axios error message from the server
      console.log(err.response?.data?.error_msg)

      this.setState({apiStatus: apiFetchStatus.failure})
    }
  }

  retry = () => {
    this.fetchVideos()
  }

  getSearchInput = event => {
    // In setState method we can pass two arguments, second argument is a
    // callback(it can access latest state) which will be executed once the
    // state is updated and it is a optional argument
    this.setState({searchQuery: event.target.value}, this.sendVideoDataRequest)
  }

  renderBuyPremiumCard = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {removeBanner, isLightTheme} = value
        const onRemoveAdBanner = () => {
          removeBanner()
        }

        return (
          <BuyPremiumCard data-testid="banner">
            <BrandLogoContainer>
              <BrandImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <CloseBtn
                data-testid="close"
                type="button"
                onClick={onRemoveAdBanner}
              >
                <MdClose />
              </CloseBtn>
            </BrandLogoContainer>
            <BuyPremiumDescription theme={isLightTheme}>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BuyPremiumDescription>
            <GetItNowBtn>GET IT NOW</GetItNowBtn>
          </BuyPremiumCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSearchBar = () => {
    const {searchQuery} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLightTheme} = value

          return (
            <SearchBarContainer theme={isLightTheme}>
              <SearchInput
                theme={isLightTheme}
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={this.getSearchInput}
              />
              <SearchIconButton
                onClick={this.fetchVideos}
                data-testid="searchButton"
                theme={isLightTheme}
              >
                <BiSearchAlt2
                  className={
                    isLightTheme
                      ? 'search-icon'
                      : 'search-icon dark-search-icon'
                  }
                />
              </SearchIconButton>
            </SearchBarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderFailureView = () => <FailureView reload={this.retry} />

  renderLoaderView = () => <LoaderView />

  renderNoVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <NoVideosViewContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading theme={isLightTheme}>
              No Search results found
            </NoVideosHeading>
            <NoVideosSuggestion theme={isLightTheme}>
              Try different key words or remove search filter
            </NoVideosSuggestion>
          </NoVideosViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideos = () => {
    const {videosList} = this.state

    return (
      <VideosList>
        {videosList.map(eachVideo => (
          <HomeVideoItemCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideosList>
    )
  }

  renderAllVideos = () => {
    const {videosList} = this.state

    return (
      <>
        {videosList.length > 0
          ? this.renderVideos()
          : this.renderNoVideosView()}
      </>
    )
  }

  renderVideosView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiFetchStatus.failure:
        return this.renderFailureView()

      case apiFetchStatus.success:
        return this.renderAllVideos()

      case apiFetchStatus.fetching:
        return this.renderLoaderView()

      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {showAdBanner, isLightTheme} = value

          return (
            <HomePageContainer theme={isLightTheme} data-testid="home">
              <Header />
              <HomePageContent>
                <DesktopNavigationTabs />
                <HomeVideosContent>
                  {showAdBanner && this.renderBuyPremiumCard()}
                  <VideosContainer theme={isLightTheme}>
                    {this.renderSearchBar()}
                    {this.renderVideosView()}
                  </VideosContainer>
                </HomeVideosContent>
              </HomePageContent>
            </HomePageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
