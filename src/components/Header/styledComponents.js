import styled from 'styled-components'

export const NavBar = styled.nav`
  width: 100%;
  height: 60px;
  padding-top: 6px;
  padding-bottom: 6px;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? ' #ffffff' : '#313131')};

  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavContent = styled.div`
  width: 92%;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavBrandLogo = styled.img`
  height: 26px;
  width: 96px;
`

export const MobileNavigationMenu = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: -100%;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  transition: transform 0.5s ease-in, background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
`

export const MenuCloseIconBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 10px 20px;

  cursor: pointer;
  align-self: flex-end;
  transition: color 0.3s ease-in, transform 0.5s ease-in;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`
export const NavigationMenuContainer = styled.div`
  justify-content: center;
`

export const MobileNavItemsContainer = styled.ul`
  padding-left: 0;
  padding-top: 6px;

  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MobileNavItem = styled.li`
  list-style-type: none;

  margin-right: 4px;
`

export const MobileNavItemBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const NavItemsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const NavIconBtn = styled.button`
  border: none;
  padding-top: 7px;
  margin-right: 10px;

  background-color: transparent;
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const LogoutBtn = styled.button`
  height: 33px;
  width: 80px;
  border: 1px solid ${props => (props.theme === true ? '#000000' : '#ffffff')};
  border-radius: 3px;

  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  transition: all 0.3s ease-in;

  background-color: transparent;

  :hover {
    background-color: ${props =>
      props.theme === true ? '#000000' : '#ffffff'};
    color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
  }
`

export const MobileLogoutContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: -100%;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  transition: transform 0.5s ease-in, background-color 0.3s ease-in;
`

export const LogoutPageCard = styled.div`
  min-width: 300px;
  max-width: 450px;
  padding: 30px;
  border: 1px solid ${props => (props.theme === true ? '#ffffff' : '#000000')};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in;
  background-color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
`

export const LogoutPageQuestion = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  text-align: center;

  transition: color 0.3s ease-in;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CustomButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;

  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
`

export const PageCancelBtn = styled(CustomButton)`
  border: 1px solid #94a3b8;
  background-color: transparent;
  color: #94a3b8;
  margin-right: 20px;

  transition: all 0.3s ease-in;

  :hover {
    background-color: #94a3b9;
    color: #ffffff;
    transform: translateY(-3px);
  }
`
export const PageLogoutBtn = styled(CustomButton)`
  border: 1px solid #3b82f6;
  background-color: transparent;
  color: #3b82f6;

  transition: all 0.3s ease-in;

  :hover {
    background-color: #3b82f6;
    color: #ffffff;
    transform: translateY(-3px);
  }
`
