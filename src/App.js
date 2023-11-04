import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NxtWatchContext from './context/NxtWatchContext'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import Video from './components/Video'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  state = {
    isLightTheme: true,
    showAdBanner: true,
    savedVideosList: [],
    likedVideosList: [],
    dislikedVideosList: [],
  }

  removeAdBanner = () => {
    this.setState({showAdBanner: false})
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isLightTheme: !prevState.isLightTheme,
    }))
  }

  getVideoIndex = (video, list) => {
    const {id} = video
    const currentVideoIndex = list.findIndex(eachItem => eachItem.id === id)
    return currentVideoIndex
  }

  toggleSaveVideo = video => {
    const {savedVideosList} = this.state
    const currentVideoIndex = this.getVideoIndex(video, savedVideosList)

    if (currentVideoIndex === -1) {
      savedVideosList.push(video)
      this.setState({savedVideosList: [...savedVideosList]})
    } else {
      savedVideosList.splice(currentVideoIndex, 1)
      this.setState({savedVideosList: [...savedVideosList]})
    }
  }

  checkForVideoPresence = (video, list) => {
    const currentVideoIndex = this.getVideoIndex(video, list)
    if (currentVideoIndex !== -1) {
      return true
    }
    return false
  }

  isVideoSaved = video => {
    const {savedVideosList} = this.state
    return this.checkForVideoPresence(video, savedVideosList)
  }

  isVideoLiked = video => {
    const {likedVideosList} = this.state
    return this.checkForVideoPresence(video, likedVideosList)
  }

  isVideoDisliked = video => {
    const {dislikedVideosList} = this.state
    return this.checkForVideoPresence(video, dislikedVideosList)
  }

  removeVideoFromList = (video, list) => {
    const index = this.getVideoIndex(video, list)
    if (index !== -1) {
      list.splice(index, 1)
    }
  }

  addVideoReaction = (video, reaction) => {
    const {dislikedVideosList, likedVideosList} = this.state

    switch (reaction) {
      case 'LIKE':
        if (this.isVideoDisliked(video)) {
          this.removeVideoFromList(video, dislikedVideosList)
        }
        if (!this.isVideoLiked(video)) {
          this.setState(prevState => ({
            dislikedVideosList: [...dislikedVideosList],
            likedVideosList: [...prevState.likedVideosList, video],
          }))
        }
        break

      case 'DISLIKE':
        if (this.isVideoLiked(video)) {
          this.removeVideoFromList(video, likedVideosList)
        }
        if (!this.isVideoDisliked(video)) {
          this.setState(prevState => ({
            dislikedVideosList: [...prevState.dislikedVideosList, video],
            likedVideosList: [...likedVideosList],
          }))
        }
        break

      default:
        break
    }
  }

  render() {
    const {isLightTheme, showAdBanner, savedVideosList} = this.state

    return (
      <>
        <NxtWatchContext.Provider
          value={{
            isLightTheme,
            showAdBanner,
            savedVideosList,
            changeTheme: this.changeTheme,
            removeBanner: this.removeAdBanner,
            toggleSaveVideo: this.toggleSaveVideo,
            isVideoSaved: this.isVideoSaved,
            isVideoLiked: this.isVideoLiked,
            isVideoDisliked: this.isVideoDisliked,
            addVideoReaction: this.addVideoReaction,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute exact path="/videos/:id" component={Video} />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </NxtWatchContext.Provider>
      </>
    )
  }
}

export default App
