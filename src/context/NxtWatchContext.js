import React from 'react'

const NxtWatchContext = React.createContext({
  isLightTheme: true,
  changeTheme: () => {},

  showAdBanner: true,
  removeBanner: () => {},

  savedVideosList: [],
  isVideoSaved: () => {},
  toggleSaveVideo: () => {},

  likedVideosList: [],
  isVideoLiked: () => {},

  dislikedVideosList: [],
  isVideoDisliked: () => {},

  addVideoReaction: () => {},
})

export default NxtWatchContext
