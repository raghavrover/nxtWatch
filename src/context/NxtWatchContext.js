import React from 'react'

const NxtWatchContext = React.createContext({
  isLightTheme: true,
  showAdBanner: true,
  savedVideosList: [],
  likedVideosList: [],
  dislikedVideosList: [],
  activeRouteId: 'HOME',
  changeTheme: () => {},
  changeActiveRoute: () => {},
  toggleSaveVideo: () => {},
  removeBanner: () => {},
  isVideoSaved: () => {},
  isVideoLiked: () => {},
  isVideoDisliked: () => {},
  addVideoReaction: () => {},
})

export default NxtWatchContext
