import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {
  BsMoon,
  BiSun,
  MdClose,
  GiHamburgerMenu,
  FiLogOut,
} from 'react-icons/all'
import NavigationTabs from '../NavigationMenu'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavBar,
  NavContent,
  NavBrandLogo,
  MobileNavItemsContainer,
  MobileNavItem,
  MobileNavItemBtn,
  NavItemsContainer,
  NavIconBtn,
  ProfileImage,
  LogoutBtn,
  MobileLogoutContainer,
  MobileNavigationMenu,
  NavigationMenuContainer,
  MenuCloseIconBtn,
  LogoutPageCard,
  LogoutPageQuestion,
  PageCancelBtn,
  PageLogoutBtn,
  ButtonsContainer,
} from './styledComponents'
import './index.css'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isLightTheme, changeTheme} = value
      const onThemeChange = () => {
        changeTheme()
      }

      /* Logout functionality */
      const logout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
        document.body.classList.remove('over-flow')
      }

      const DesktopLogoutBtn = (
        <LogoutBtn theme={isLightTheme}>Logout</LogoutBtn>
      )

      /* pop-up menu style object to pass it as an prop */
      const logoutPopupStyle = {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0, 0.5)',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }

      /* function to toggle mobile menu */
      const toggleMobileMenu = () => {
        document
          .getElementById('mobileNavigationMenu')
          .classList.toggle('translate-menu')
        document
          .getElementById('menuCloseIcon')
          .classList.toggle('rotate-close-icon')
        document.body.classList.toggle('over-flow')
      }

      /* function to toggle mobile logout card */
      const toggleLogoutCard = () => {
        document
          .getElementById('mobileLogoutWrapper')
          .classList.toggle('toggle-mobile-logout')
        document.body.classList.toggle('over-flow')
      }

      /* Mobile menu component */
      const renderMobileMenu = () => (
        <MobileNavigationMenu id="mobileNavigationMenu" theme={isLightTheme}>
          <MenuCloseIconBtn
            id="menuCloseIcon"
            type="button"
            onClick={toggleMobileMenu}
            theme={isLightTheme}
          >
            <MdClose className="nav-item-icon" />
          </MenuCloseIconBtn>
          <NavigationMenuContainer>
            <NavigationTabs />
          </NavigationMenuContainer>
        </MobileNavigationMenu>
      )

      /* Logout card component */
      const renderLogoutCard = callback => (
        <LogoutPageCard theme={isLightTheme}>
          <LogoutPageQuestion theme={isLightTheme}>
            Are you sure, you want to logout
          </LogoutPageQuestion>
          <ButtonsContainer>
            <PageCancelBtn type="button" onClick={callback}>
              Cancel
            </PageCancelBtn>
            <PageLogoutBtn onClick={logout}>Confirm</PageLogoutBtn>
          </ButtonsContainer>
        </LogoutPageCard>
      )

      const renderMobileLogout = () => (
        <MobileLogoutContainer id="mobileLogoutWrapper" theme={isLightTheme}>
          {renderLogoutCard(toggleLogoutCard)}
        </MobileLogoutContainer>
      )

      const renderLogoutPopup = triggerBtn => (
        <Popup trigger={triggerBtn} overlayStyle={logoutPopupStyle} modal>
          {close => renderLogoutCard(close)}
        </Popup>
      )

      const renderMobileNavItems = () => (
        <MobileNavItemsContainer theme={isLightTheme}>
          <MobileNavItem>
            <MobileNavItemBtn onClick={onThemeChange} data-testid="theme">
              {isLightTheme ? (
                <BsMoon className="nav-item-icon" />
              ) : (
                <BiSun className="dark-theme nav-item-icon" />
              )}
            </MobileNavItemBtn>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavItemBtn onClick={toggleMobileMenu} type="button">
              <GiHamburgerMenu
                className={
                  isLightTheme ? 'nav-item-icon' : 'dark-theme nav-item-icon'
                }
              />
            </MobileNavItemBtn>
          </MobileNavItem>
          <MobileNavItem>{renderMobileMenu()}</MobileNavItem>
          <MobileNavItem>
            <MobileNavItemBtn id="mobileLogoutIcon" onClick={toggleLogoutCard}>
              <FiLogOut
                className={
                  isLightTheme ? 'nav-item-icon' : 'dark-theme nav-item-icon'
                }
              />
            </MobileNavItemBtn>
          </MobileNavItem>
          <MobileNavItem>{renderMobileLogout()}</MobileNavItem>
        </MobileNavItemsContainer>
      )

      const renderNavItems = () => (
        <NavItemsContainer theme={isLightTheme}>
          <NavIconBtn onClick={onThemeChange} data-testid="theme">
            {isLightTheme ? (
              <BsMoon className="md-nav-item-icon" />
            ) : (
              <BiSun className="dark-theme md-nav-item-icon" />
            )}
          </NavIconBtn>
          <NavIconBtn>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
          </NavIconBtn>
          {renderLogoutPopup(DesktopLogoutBtn)}
        </NavItemsContainer>
      )
      return (
        <NavBar theme={isLightTheme}>
          <NavContent>
            <Link to="/">
              <NavBrandLogo
                src={
                  isLightTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            {renderMobileNavItems()}
            {renderNavItems()}
          </NavContent>
        </NavBar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
