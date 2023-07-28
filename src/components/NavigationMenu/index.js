import {Link} from 'react-router-dom'
import {AiFillHome, AiTwotoneFire} from 'react-icons/ai'
import {GiGamepad} from 'react-icons/gi'
import {MdPlaylistAdd} from 'react-icons/md'
import {NavigationMenu, MenuTab, TabName} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'

const activeTabIds = {
  home: 'HOME',
  trending: 'TRENDING',
  games: 'GAMES',
  savedVideos: 'SAVED_VIDEOS',
  videoDetails: 'VIDEO_DETAILS',
}

const NavigationTabs = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {activeRouteId, changeActiveRoute, isLightTheme} = value

      const onHomeSelection = () => {
        changeActiveRoute('HOME')
      }

      const onTrendingSelection = () => {
        changeActiveRoute('TRENDING')
      }

      const onGamesSelection = () => {
        changeActiveRoute('GAMES')
      }

      const onSavedVideosSelection = () => {
        changeActiveRoute('SAVED_VIDEOS')
      }

      return (
        <NavigationMenu>
          <Link to="/" className="link-item">
            <MenuTab
              isActiveRoute={activeRouteId === activeTabIds.home}
              onClick={onHomeSelection}
              theme={isLightTheme}
            >
              <AiFillHome
                className="menu-tab-icon"
                color={
                  activeRouteId === activeTabIds.home ? '#de1414' : '#737070'
                }
              />
              <TabName
                isActiveRoute={activeRouteId === activeTabIds.home}
                theme={isLightTheme}
              >
                Home
              </TabName>
            </MenuTab>
          </Link>
          <Link to="/trending" className="link-item">
            <MenuTab
              isActiveRoute={activeRouteId === activeTabIds.trending}
              onClick={onTrendingSelection}
              theme={isLightTheme}
            >
              <AiTwotoneFire
                className="menu-tab-icon"
                color={
                  activeRouteId === activeTabIds.trending
                    ? '#de1414'
                    : '#737070'
                }
              />
              <TabName
                isActiveRoute={activeRouteId === activeTabIds.trending}
                theme={isLightTheme}
              >
                Trending
              </TabName>
            </MenuTab>
          </Link>
          <Link to="/gaming" className="link-item">
            <MenuTab
              isActiveRoute={activeRouteId === activeTabIds.games}
              onClick={onGamesSelection}
              theme={isLightTheme}
            >
              <GiGamepad
                className="menu-tab-icon"
                color={
                  activeRouteId === activeTabIds.games ? '#de1414' : '#737070'
                }
              />
              <TabName
                isActiveRoute={activeRouteId === activeTabIds.games}
                theme={isLightTheme}
              >
                Gaming
              </TabName>
            </MenuTab>
          </Link>
          <Link to="/saved-videos" className="link-item">
            <MenuTab
              isActiveRoute={activeRouteId === activeTabIds.savedVideos}
              onClick={onSavedVideosSelection}
              theme={isLightTheme}
            >
              <MdPlaylistAdd
                className="menu-tab-icon"
                color={
                  activeRouteId === activeTabIds.savedVideos
                    ? '#de1414'
                    : '#737070'
                }
              />
              <TabName
                isActiveRoute={activeRouteId === activeTabIds.savedVideos}
                theme={isLightTheme}
              >
                Saved Videos
              </TabName>
            </MenuTab>
          </Link>
        </NavigationMenu>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NavigationTabs
