import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  GameCard,
  GameThumbnail,
  GameDetailsContainer,
  GameName,
  ViewCount,
} from './styledComponents'
import './index.css'

const GameItemCard = props => {
  const {gameDetails} = props
  const {id, title, viewCount, thumbnailUrl} = gameDetails
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {changeActiveRoute, isLightTheme} = value

        const onGameSelecting = () => {
          changeActiveRoute('VIDEO_DETAILS')
        }

        return (
          <GameCard onClick={onGameSelecting}>
            <Link to={`/videos/${id}`} className="link-item">
              <GameThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <GameDetailsContainer>
                <GameName theme={isLightTheme}>{title}</GameName>
                <ViewCount
                  theme={isLightTheme}
                >{`${viewCount} Watching Worldwide`}</ViewCount>
              </GameDetailsContainer>
            </Link>
          </GameCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GameItemCard
