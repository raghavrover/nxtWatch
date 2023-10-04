import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoItemCard,
  ThumbnailImage,
  VideoItemDetails,
  ChannelImage,
  VideoDetailsContainer,
  VideoTitle,
  DotSpan,
  DotSpan2,
  VideoStatsContainer,
  ChannelName,
  ViewsCountListItem,
  VideoStatsList,
} from './styledComponents'
import './index.css'
import NxtWatchContext from '../../context/NxtWatchContext'

const HomeVideoItemCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    viewsCount,
    publishedAt,
    channel,
    thumbnailUrl,
  } = videoDetails
  const formattedChannelData = {
    channelName: channel.name,
    channelProfileImage: channel.profile_image_url,
  }
  const formattedPublishedAt = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightTheme} = value

        return (
          <VideoItemCard>
            <Link to={`/videos/${id}`} className="link-item">
              <ThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
                loading="lazy"
              />
              <VideoItemDetails>
                <ChannelImage
                  src={formattedChannelData.channelProfileImage}
                  alt="channel logo"
                />
                <VideoDetailsContainer>
                  <VideoTitle theme={isLightTheme}>{title}</VideoTitle>
                  <VideoStatsContainer>
                    <ChannelName theme={isLightTheme}>
                      {formattedChannelData.channelName}
                    </ChannelName>
                    <VideoStatsList>
                      <DotSpan2 theme={isLightTheme}>.</DotSpan2>
                      <ViewsCountListItem theme={isLightTheme}>
                        {viewsCount}
                      </ViewsCountListItem>
                      <DotSpan theme={isLightTheme}>.</DotSpan>
                      <ViewsCountListItem theme={isLightTheme}>
                        {formattedPublishedAt}
                      </ViewsCountListItem>
                    </VideoStatsList>
                  </VideoStatsContainer>
                </VideoDetailsContainer>
              </VideoItemDetails>
            </Link>
          </VideoItemCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeVideoItemCard
