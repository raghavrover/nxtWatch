import {Link} from 'react-router-dom'
import {
  AiFillHome,
  AiTwotoneFire,
  GiGamepad,
  MdPlaylistAdd,
} from 'react-icons/all'
import {NavigationMenu, MenuTab, TabName} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import '../Header/index.css'
import './index.css'

const NavigationTabs = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isLightTheme} = value

      const onTabSelection = () => {
        document.body.classList.remove('over-flow')
      }

      // Finding Pathname using location property of the document object, with the pathname property of the location object.
      const isActivePath = path => document.location.pathname === path

      const navMenuTabsContent = [
        {
          id: 'menu-tab-1',
          path: '/',
          route: 'Home',
          icon: (
            <AiFillHome
              className="menu-tab-icon"
              color={isActivePath('/') ? '#de1414' : '#737070'}
            />
          ),
        },
        {
          id: 'menu-tab-2',
          path: '/trending',
          route: 'Trending',
          icon: (
            <AiTwotoneFire
              className="menu-tab-icon"
              color={isActivePath('/trending') ? '#de1414' : '#737070'}
            />
          ),
        },
        {
          id: 'menu-tab-3',
          path: '/gaming',
          route: 'Gaming',
          icon: (
            <GiGamepad
              className="menu-tab-icon"
              color={isActivePath('/gaming') ? '#de1414' : '#737070'}
            />
          ),
        },
        {
          id: 'menu-tab-4',
          path: '/saved-videos',
          route: 'Saved Videos',
          icon: (
            <MdPlaylistAdd
              className="menu-tab-icon"
              color={isActivePath('/saved-videos') ? '#de1414' : '#737070'}
            />
          ),
        },
      ]

      return (
        <NavigationMenu>
          {/* Iterating over the `navMenuTabsContent` to create navigation menu */}
          {navMenuTabsContent.map(menuObject => (
            <MenuTab
              key={menuObject.id}
              isActive={isActivePath(menuObject.path)}
              theme={isLightTheme}
              onClick={onTabSelection}
            >
              <Link to={menuObject.path} className="menu-link-item">
                {menuObject.icon}
                <TabName
                  isActive={isActivePath(menuObject.path)}
                  theme={isLightTheme}
                >
                  {menuObject.route}
                </TabName>
              </Link>
            </MenuTab>
          ))}
        </NavigationMenu>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NavigationTabs
