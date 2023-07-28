import styled from 'styled-components'

export const NavigationMenuContainer = styled.div`
  width: 22%;
  max-width: 250px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  transition: background-color 0.3s ease-in;

  background-color: ${props => (props.theme === true ? '#ffffff' : '#313131')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SocialMediaAndContactUs = styled.div`
  width: 100%;
  padding-left: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ContactUs = styled.p`
  margin-bottom: 20px;

  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;

  color: ${props => (props.theme === true ? '#475569' : '#ffffff')};
`
export const SocialMediaContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const AnchorMediaIcon = styled.a`
  margin-right: 10px;
`
export const MediaImage = styled.img`
  height: 37px;
  width: 37px;
`
export const NavigationContainerDescription = styled.p`
  padding-right: 20px;

  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  color: ${props => (props.theme === true ? '#64748b' : '#ffffff')};
`
