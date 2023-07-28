import styled from 'styled-components'

export const VideoItemCard = styled.div`
  list-style-type: none;

  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (min-width: 576px) {
    margin-bottom: 40px;
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  object-fit: fill;

  @media screen and (min-width: 576px) {
    width: 47%;
    margin-right: 16px;
  }
`

export const VideoDetailsContainer = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;

  @media screen and (min-width: 576px) {
    width: 47%;
  }
`

export const ChannelProfileImage = styled.img`
  height: 45px;
  width: 45px;
  margin-right: 16px;
  border: none;
  border-radius: 25px;
  margin-top: 4px;

  @media screen and (min-width: 567px) {
    display: none;
  }
`
export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  flex-grow: 1;
`

export const VideoTitle = styled.p`
  margin-top: 2px;
  margin-bottom: 2px;

  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  line-height: 1.3;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`

export const VideoStatsContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (min-width: 567px) {
    flex-direction: column;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  @media screen and (min-width: 567px) {
    margin-right: 10px;
    margin-bottom: 0;
  }
`
export const DotSpan = styled.span`
  margin-right: 6px;
  margin-left: 6px;
  padding-top: 6px;

  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;

  color: ${props => (props.theme === true ? '#000000' : '#cbd5e1')};
`

export const DotSpan2 = styled(DotSpan)`
  @media screen and (min-width: 567px) {
    display: none;
  }
`

export const VideoStatsList = styled.div`
  width: 60%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
`

export const ViewsCountListItem = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`
