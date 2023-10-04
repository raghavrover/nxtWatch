import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoItemCard,
  ThumbnailImage,
  VideoDetailsContainer,
  VideoTitle,
  VideoStatsContainer,
  ChannelProfileImage,
  VideoContent,
  ChannelName,
  DotSpan,
  DotSpan2,
  ViewsCountListItem,
  VideoStatsList,
} from './styledComponents'
import './index.css'

const SavedVideoItemCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    viewCount,
    publishedAt,
    formattedChannel,
    thumbnailUrl,
  } = videoDetails
  const formattedChannelData = {
    channelName: formattedChannel.name,
    channelProfileImage: formattedChannel.profileImageUrl,
  }
  const formattedPublishedAt = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightTheme} = value

        return (
          <>
            <Link to={`/videos/${id}`} className="link-item">
              <VideoItemCard>
                <ThumbnailImage
                  src={thumbnailUrl}
                  alt="video thumbnail"
                  loading="lazy"
                />
                <VideoDetailsContainer>
                  <ChannelProfileImage
                    src={formattedChannelData.channelProfileImage}
                  />
                  <VideoContent>
                    <VideoTitle theme={isLightTheme}>{title}</VideoTitle>
                    <VideoStatsContainer>
                      <ChannelName theme={isLightTheme}>
                        {formattedChannelData.channelName}
                      </ChannelName>
                      <VideoStatsList>
                        <DotSpan2 theme={isLightTheme}>.</DotSpan2>
                        <ViewsCountListItem theme={isLightTheme}>
                          {viewCount}
                        </ViewsCountListItem>
                        <DotSpan theme={isLightTheme}>.</DotSpan>
                        <ViewsCountListItem theme={isLightTheme}>
                          {formattedPublishedAt}
                        </ViewsCountListItem>
                      </VideoStatsList>
                    </VideoStatsContainer>
                  </VideoContent>
                </VideoDetailsContainer>
              </VideoItemCard>
            </Link>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideoItemCard
