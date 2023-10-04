import React from 'react'

const NxtWatchContext = React.createContext({
  isLightTheme: true,
  showAdBanner: true,
  savedVideosList: [],
  likedVideosList: [],
  dislikedVideosList: [],
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
