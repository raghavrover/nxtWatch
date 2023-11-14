import {Component} from 'react'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike, MdPlaylistAdd} from 'react-icons/all'
import Cookies from 'js-cookie'
import axios from 'axios'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import LoaderView from '../Loader'
import FailureView from '../FailureView'
import DesktopNavigationTabs from '../NavigationMenuContainer'
import {
  VideoItemContainer,
  VideoItemContent,
  VideoItemDetails,
  VideoDataContainer,
  VideoPlayer,
  VideoDetails,
  VideoTitle,
  VideoStatsAndViewCountContainer,
  ViewCountAndPublishedDateContainer,
  ViewCount,
  Dot,
  ChannelAndDescriptionContainer,
  ChannelAndDescription,
  ChannelAndDescriptionContent,
  ChannelThumbnail,
  ChannelName,
  SubscribersCount,
  ChannelDetails,
  MobileDescription,
  Description,
  ViewStatsContainer,
  StatsListItem,
  LikeButton,
  LikeText,
  DislikeButton,
  DislikeText,
  SaveButton,
  SaveText,
} from './styledComponents'
import './index.css'

const apiFetchStatus = {
  initial: 'INITIAL',
  fetching: 'FETCHING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Video extends Component {
  state = {
    apiStatus: apiFetchStatus.initial,
    videoItemData: {},
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getFormattedVideoDetails = data => ({
    id: data.id,
    title: data.title,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    viewCount: data.view_count,
    description: data.description,
    videoUrl: data.video_url,
  })

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiFetchStatus.fetching})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    try {
      //   Data Fetching through axios
      const response = await axios.get(url, options)
      const {data} = response
      const videoDetails = data.video_details
      const {channel} = videoDetails

      const formattedVideoDetails = this.getFormattedVideoDetails(videoDetails)
      const formattedChannel = {
        name: channel.name,
        profileImageUrl: channel.profile_image_url,
        subscriberCount: channel.subscriber_count,
      }
      const newVideoDetails = {formattedChannel, ...formattedVideoDetails}

      this.setState({
        apiStatus: apiFetchStatus.success,
        videoItemData: newVideoDetails,
      })
    } catch (err) {
      this.setState({apiStatus: apiFetchStatus.failure})
      console.log(err?.response?.data?.error_msg)
    }
    return null
  }

  retry = () => {
    this.getVideoItemDetails()
  }

  renderVideoStats = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {
          toggleSaveVideo,
          isVideoSaved,
          isVideoLiked,
          isVideoDisliked,
          addVideoReaction,
        } = value
        const {videoItemData} = this.state
        const isSaved = isVideoSaved(videoItemData)
        const isLiked = isVideoLiked(videoItemData)
        const isDisliked = isVideoDisliked(videoItemData)

        const onSavingVideo = () => {
          toggleSaveVideo(videoItemData)
        }
        const videoDisliked = () => {
          addVideoReaction(videoItemData, 'DISLIKE')
        }
        const videoLiked = () => {
          addVideoReaction(videoItemData, 'LIKE')
        }

        return (
          <ViewStatsContainer>
            <StatsListItem onClick={videoLiked}>
              <LikeButton reaction={isLiked}>
                <BiLike />
              </LikeButton>
              <LikeText reaction={isLiked}>Like</LikeText>
            </StatsListItem>
            <StatsListItem onClick={videoDisliked}>
              <DislikeButton reaction={isDisliked}>
                <BiDislike />
              </DislikeButton>
              <DislikeText reaction={isDisliked}>Dislike</DislikeText>
            </StatsListItem>
            <StatsListItem onClick={onSavingVideo}>
              <SaveButton saved={isSaved}>
                <MdPlaylistAdd />
              </SaveButton>
              <SaveText saved={isSaved}>{isSaved ? 'Saved' : 'Save'}</SaveText>
            </StatsListItem>
          </ViewStatsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideoDetails = () => {
    const {videoItemData} = this.state
    const {title, viewCount, publishedAt} = videoItemData

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLightTheme} = value
          return (
            <VideoDetails>
              <VideoTitle theme={isLightTheme}>{title}</VideoTitle>
              <VideoStatsAndViewCountContainer>
                <ViewCountAndPublishedDateContainer>
                  <ViewCount theme={isLightTheme}>{viewCount}</ViewCount>
                  <Dot theme={isLightTheme}>.</Dot>
                  <ViewCount theme={isLightTheme}>
                    {formatDistanceToNow(new Date(publishedAt))}
                  </ViewCount>
                </ViewCountAndPublishedDateContainer>
                {this.renderVideoStats()}
              </VideoStatsAndViewCountContainer>
            </VideoDetails>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderChannelAndDescription = () => {
    const {videoItemData} = this.state
    const {formattedChannel, description} = videoItemData
    const {name, profileImageUrl, subscriberCount} = formattedChannel
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLightTheme} = value

          return (
            <ChannelAndDescriptionContainer>
              <ChannelAndDescription>
                <ChannelThumbnail src={profileImageUrl} alt="channel logo" />
                <ChannelAndDescriptionContent>
                  <ChannelDetails>
                    <ChannelName theme={isLightTheme}>{name}</ChannelName>
                    <SubscribersCount theme={isLightTheme}>
                      {subscriberCount} Subscribers
                    </SubscribersCount>
                  </ChannelDetails>
                  <Description theme={isLightTheme}>{description}</Description>
                </ChannelAndDescriptionContent>
              </ChannelAndDescription>
              <MobileDescription theme={isLightTheme}>
                {description}
              </MobileDescription>
            </ChannelAndDescriptionContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderFailureView = () => <FailureView reload={this.retry} />

  renderLoaderView = () => <LoaderView />

  renderVideoContent = () => {
    const {videoItemData} = this.state
    const {videoUrl} = videoItemData

    return (
      <VideoItemDetails>
        <VideoPlayer>
          <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
        </VideoPlayer>
        <VideoDataContainer>
          {this.renderVideoDetails()}
          {this.renderChannelAndDescription()}
        </VideoDataContainer>
      </VideoItemDetails>
    )
  }

  renderVideoPageContent = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiFetchStatus.failure:
        return this.renderFailureView()

      case apiFetchStatus.fetching:
        return this.renderLoaderView()

      case apiFetchStatus.success:
        return this.renderVideoContent()

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
            <VideoItemContainer
              theme={isLightTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoItemContent>
                <DesktopNavigationTabs />
                {this.renderVideoPageContent()}
              </VideoItemContent>
            </VideoItemContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Video
