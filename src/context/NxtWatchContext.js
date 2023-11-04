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
  addVideoReaction: () => {},

  dislikedVideosList: [],
  isVideoDisliked: () => {},
})

export default NxtWatchContext
