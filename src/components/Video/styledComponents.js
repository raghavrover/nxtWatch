import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  min-height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#ebebeb' : '#0f0f0f')};
`
export const VideoItemContent = styled.div`
  width: 100%;
  height: calc(100vh - 60px);

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const VideoItemDetails = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  overflow-y: auto;
  padding: 14px;

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    padding: 20px;
  }
`
export const VideoPlayer = styled.div`
  width: 100%;
  max-width: 1024px;
  aspect-ratio: 16 / 9;
  margin-bottom: 14px;
`

export const VideoDataContainer = styled.div`
  width: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const VideoDetails = styled.div`
  width: 100%;
  margin-bottom: 18px;
  border-bottom: 2px solid #bfbfbf;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const VideoTitle = styled.p`
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 5px;

  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const VideoStatsAndViewCountContainer = styled.div`
  width: 100%;
  padding-bottom: 5px;
  padding-top: 0;
  //  border: 1px solid red;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const ViewCountAndPublishedDateContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 1;

  color: ${props => (props.theme === true ? '#00306e' : '#f9f9f9')};
`
export const Dot = styled.span`
  height: 30px;
  margin-right: 4px;
  margin-left: 6px;
  padding-top: 12px;

  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 400;
  line-height: 0.4;
  color: ${props => (props.theme === true ? '#00306e' : '#f9f9f9')};
`
export const ChannelAndDescriptionContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ChannelAndDescription = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ChannelAndDescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
`
export const ChannelThumbnail = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 25px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    height: 45px;
    width: 45px;
  }
`
export const ChannelName = styled.p`
  margin-top: 2px;
  margin-bottom: 2px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  line-height: 1;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`
export const SubscribersCount = styled.p`
  margin-top: 4px;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  line-height: 1;

  color: ${props => (props.theme === true ? '#00306e' : '#f9f9f9')};
`
export const ChannelDetails = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const MobileDescription = styled(Description)`
  font-size: 14px;
  line-height: 1.3;
  font-weight: 400;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};

  @media screen and (max-width: 767px) {
    display: block;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ViewStatsContainer = styled.ul`
  padding-left: 0;
  margin-top: 2px;
  margin-bottom: 2px;

  display: flex;
  align-items: center;
`
export const StatsListItem = styled.li`
  list-style-type: none;

  display: flex;
  align-items: center;
  margin-right: 10px;
`
export const StatButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  margin-right: 0;
  padding-right: 2px;
`

export const StatType = styled.button`
  border: none;
  padding-bottom: 5px;
  cursor: pointer;
  background-color: transparent;

  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
`

export const LikeButton = styled(StatButton)`
  color: ${props => {
    if (props.reaction === true) {
      return ' #2563eb'
    }
    return '#64748b'
  }};
`
export const LikeText = styled(StatType)`
  color: ${props => {
    if (props.reaction === true) {
      return ' #2563eb'
    }
    return '#64748b'
  }};
`

export const DislikeButton = styled(StatButton)`
  color: ${props => {
    if (props.reaction === true) {
      return ' #2563eb'
    }
    return '#64748b'
  }};
`
export const DislikeText = styled(StatType)`
  color: ${props => {
    if (props.reaction === true) {
      return ' #2563eb'
    }
    return '#64748b'
  }};
`

export const SaveButton = styled(StatButton)`
  color: ${props => {
    if (props.saved === true) {
      return ' #2563eb'
    }
    return '#64748b'
  }};
`
export const SaveText = styled(StatType)`
  color: ${props => {
    if (props.saved === true) {
      return ' #2563eb'
    }
    return '#64748b'
  }};
`
