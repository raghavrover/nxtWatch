In this project I built **Nxt Watch** App using React, React Router, and a few third party packages.

### Refer to the below video:

<div style="text-align: center;">
     <video style="max-width:80%; height:50vh;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/nxt-watch-output.mp4" type="video/mp4">
  </video>
</div>
<br/>

### About App

<details>
<summary>Click to view</summary>
<br/>

- **Nxt Watch** is a video streaming application similar to YouTube. The application is a Single Page Application(SPA) built using React, featuring various routes like `Login`, `Home`, `Trending`, `Gaming`, `Saved Videos`, `Video` and `Not Found`.
- By using React Router DOM seamless user navigation is enabled.
- All routes except `Login` are protected from unauthorized access of users. By wrapping each route inside a protected route.

</details>

### App Routes

 <details>
<summary>Login</summary>
<br/>

- User authentication is implemented by making a HTTP POST request to **loginUserApiURL**. Upon successful authentication, authorization token received in response is stored in Cookies for further authorization and user will be directed to home page.
- If authentication fails, failure is handled and an error displayed.
</details>

<details>
<summary>Home</summary>
<br/>

- A user friendly navigation to navigate across different routes is implemented.
- An HTTP GET request is made to the **getVideosApiUrl** to fetch videos data by using browsers window API `fetch` method.
- Data received in response is parsed and rendered.
- A failure view is implemented to handle any potential request failures.

</details>

<details>
<summary>Trending</summary>
<br/>

- An HTTP GET request is made to the **getTrendingVideosApiUrl** to fetch Trending videos data by using browsers window API `fetch` method.
- Data received in response is parsed and rendered.
- A failure view is implemented to handle any potential request failures.

</details>

<details>
<summary>Gaming</summary>
<br/>

- An HTTP GET request is made to the **getGamingVideosApiUrl** to fetch Gaming videos data by using browsers window API `fetch` method.
- Data received in response is parsed and rendered.
- A failure view is implemented to handle any potential request failures.
</details>

<details>
<summary>Video</summary>
<br/>

- An HTTP GET request is made to the **getVideoDataApiUrl** to fetch Gaming videos data by using browsers window API `fetch` method.
- Data received in response is parsed and rendered.
- A failure view is implemented to handle any potential request failures.
- Features: User can like, dislike, and save a video.

</details>

<details>
<summary>Saved Videos</summary>
<br/>

- All saved videos of the user are stored in `Saved Videos List` and rendered.
</details>

<details>
<summary>Not Found</summary>
<br/>

- To handle any unspecified routes(URL paths) provided by user a Not Found route is rendered.

</details>

### Application URL Paths

<details>
<summary>Click to view</summary>

<br/>

- `Home` route URL path `https://rovernxtwatch.ccbp.tech/`
- `Login` route URL path `https://rovernxtwatch.ccbp.tech/login`
- `Trending` route URL path `https://rovernxtwatch.ccbp.tech/trending`
- `Gaming` route URL path `https://rovernxtwatch.ccbp.tech/gaming`
- `SavedVideos` route URL path `https://rovernxtwatch.ccbp.tech/saved-videos`
- `VideoItemDetails` route URL path `https://rovernxtwatch.ccbp.tech/videos/:id`
</details>

### Tech Stack

<details>
<summary>Click to view</summary>

<br/>

- React, JavaScript, CSS, HTML, JSX, and a few third-party npm packages like react router DOM, react Pop-up, react-icons, js-cookie, styled-components, react-loader-spinner.
</details>

### User credentials

```text
 username: rahul
 password: rahul@2021

```
