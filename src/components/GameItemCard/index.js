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
        const {isLightTheme} = value

        return (
          <GameCard>
            <Link to={`/videos/${id}`} className="link-item">
              <GameThumbnail
                src={thumbnailUrl}
                alt="video thumbnail"
                loading="lazy"
              />
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
