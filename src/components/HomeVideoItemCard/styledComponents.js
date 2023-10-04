import styled from 'styled-components'

export const VideoItemCard = styled.div`
  list-style-type: none;

  width: 100%;
  margin-bottom: 20px;

  @media screen and (min-width: 576px) and (max-width: 1199px) {
    width: 47%;
    margin-right: 8px;
    margin-left: 8px;
  }

  @media screen and (min-width: 1200px) and (max-width: 1529px) {
    width: 30%;
    margin-right: 8px;
    margin-left: 8px;
  }

  @media screen and (min-width: 1530px) {
    width: 23%;
    margin-right: 8px;
    margin-left: 8px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;

  @media screen and (min-width: 567px) {
    border: none;
    border-radius: 10px;

    transition: all 0.3s ease-in;

    :hover {
      border-radius: 0;
      opacity: 0.9;
    }
  }
`
export const VideoItemDetails = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 30px;
  margin-right: 20px;
  margin-top: 8px;

  @media screen and (min-width: 768px) and (max-width: 1150px) {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 20px;
    margin-right: 14px;
  }
`

export const VideoDetailsContainer = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const VideoTitle = styled.p`
  margin-top: 2px;
  margin-bottom: 2px;

  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};

  @media screen and (min-width: 768px) and (max-width: 1150px) {
    font-size: 14px;
  }
`

export const VideoStatsContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 567px) and (max-width: 1299px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelName = styled.p`
  margin-right: 10px;

  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;

  color: ${props => (props.theme === true ? '#000000' : '#cbd5e1')};
  @media screen and (min-width: 567px) and (max-width: 1299px) {
    margin-bottom: 0;
  }
`
export const ViewsCountListItem = styled.p`
  margin-right: 14px;
  padding-left: 0;
  margin-left: 0;

  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;

  color: ${props => (props.theme === true ? '#000000' : '#cbd5e1')};
`
export const DotSpan = styled.span`
  margin-bottom: 10px;
  margin-right: 5px;

  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;

  color: ${props => (props.theme === true ? '#000000' : '#cbd5e1')};
`

export const DotSpan2 = styled(DotSpan)`
  @media screen and (min-width: 567px) and (max-width: 1299px) {
    display: none;
  }
`

export const VideoStatsList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  @media screen and (min-width: 567px) and (max-width: 1299px) {
    margin-top: 0;
  }
`
