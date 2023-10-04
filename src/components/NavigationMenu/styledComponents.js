import styled from 'styled-components'

export const NavigationMenu = styled.ul`
  width: 100%;
  padding-left: 0;
  margin-top: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const MenuTab = styled.li`
  list-style-type: none;
  width: 100%;
  height: 44px;
  padding-left: 15px;
  transition: background-color, 0.3s ease-in;

  background-color: ${props => {
    if (props.theme === true) {
      if (props.isActive) {
        return '#e2e8f0'
      }
    }
    // below block is else block of code for the dark theme
    if (props.isActive) {
      return '#606060'
    }
    return 'transparent'
  }};

  :hover {
    background-color: ${props =>
      props.theme === true ? '#e2e8f0' : '#606060'};
  }
`

export const TabName = styled.p`
  margin-left: 8px;
  padding-top: 3px;

  font-family: 'Roboto';
  font-size: 18px;
  font-weight: ${props => (props.isActive ? 500 : 400)};
  line-height: 1.2;

  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};

  transition: all 0.3s ease-in;
  @media screen and (min-width: 767px) {
    font-size: 15px;
  }
`
