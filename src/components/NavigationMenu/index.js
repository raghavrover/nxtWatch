import {Link} from 'react-router-dom'
import {AiFillHome, AiTwotoneFire} from 'react-icons/ai'
import {GiGamepad} from 'react-icons/gi'
import {MdPlaylistAdd} from 'react-icons/md'
import {NavigationMenu, MenuTab, TabName} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import '../Header/index.css'
import './index.css'

const activeTabIds = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMES',
  savedVideos: 'SAVED_VIDEOS',
  videoDetails: 'VIDEO_DETAILS',
}

// Modular menu tab item
const MenuTabItem = ({
  path,
  theme,
  eventHandler,
  icon,
  isActiveRoute,
  route,
}) => (
  <Link to={path} className="link-item">
    <MenuTab theme={theme} isActive={isActiveRoute} onClick={eventHandler}>
      {icon}
      <TabName isActive={isActiveRoute} theme={theme}>
        {route}
      </TabName>
    </MenuTab>
  </Link>
)

const NavigationTabs = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {activeRouteId, changeActiveRoute, isLightTheme} = value

      // Using closure to pass callback to the event handler
      const onTabSelection = tabId => () => {
        document.body.classList.remove('over-flow')
        changeActiveRoute(tabId)
      }

      return (
        <NavigationMenu>
          <MenuTabItem
            path="/"
            isActiveRoute={activeRouteId === activeTabIds.home}
            icon={
              <AiFillHome
                className="menu-tab-icon"
                color={
                  activeRouteId === activeTabIds.home ? '#de1414' : '#737070'
                }
              />
            }
            eventHandler={onTabSelection(activeTabIds.home)}
            theme={isLightTheme}
            route="Home"
          />
          <MenuTabItem
            path="/trending"
            isActiveRoute={activeRouteId === activeTabIds.trending}
            icon={
              <AiTwotoneFire
                className="menu-tab-icon"
                color={
                  activeRouteId === activeTabIds.trending
                    ? '#de1414'
                    : '#737070'
                }
              />
            }
            eventHandler={onTabSelection(activeTabIds.trending)}
            theme={isLightTheme}
            route="Trending"
          />
          <MenuTabItem
            path="/gaming"
            isActiveRoute={activeRouteId === activeTabIds.gaming}
            icon={
              <GiGamepad
                className="menu-tab-icon"
                color={
                  activeRouteId === activeTabIds.gaming ? '#de1414' : '#737070'
                }
              />
            }
            eventHandler={onTabSelection(activeTabIds.gaming)}
            theme={isLightTheme}
            route="Gaming"
          />
          <MenuTabItem
            path="/saved-videos"
            isActiveRoute={activeRouteId === activeTabIds.savedVideos}
            icon={
              <MdPlaylistAdd
                className="menu-tab-icon"
                color={
                  activeRouteId === activeTabIds.savedVideos
                    ? '#de1414'
                    : '#737070'
                }
              />
            }
            eventHandler={onTabSelection(activeTabIds.savedVideos)}
            theme={isLightTheme}
            route="Saved Videos"
          />
        </NavigationMenu>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NavigationTabs
