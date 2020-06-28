import React from "react";
import "shaka-player/dist/controls.css";
const shaka = require("shaka-player/dist/shaka-player.ui.js");

class ShakaPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isIdle: false };
    this.videoComponent = React.createRef();
    this.videoContainer = React.createRef();
    this.onErrorEvent = this.onErrorEvent.bind(this);
    this.onError = this.onError.bind(this);
  }
  onErrorEvent(event) {
    this.onError(event.detail);
  }
  onError(error) {
    console.error("Error code", error.code, "object", error);
  }

  //loop that hides overlay if user is idle. resetTimer events are set on parent div.
  //isIdle state is used to hide elements via conditionally set classname.
  resetTimer = () => {
    clearTimeout(this.time);
    this.time = setTimeout(this.hidePlayerOverlay, 3000);
    this.setState({ isIdle: false });
  };

  hidePlayerOverlay = () => {
    this.setState({ isIdle: true });
  };

  componentDidMount = () => {
    //gets actual height of browser window and sets css property to keep the aspect ratio of stream
    this.getVH = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    window.addEventListener("resize", this.getVH);

    this.resetTimer();

    var manifestUri =
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

    const video = this.videoComponent.current;
    const videoContainer = this.videoContainer.current;

    var player = new shaka.Player(video);

    const uiConfig = {};

    //Configuring elements to be displayed on video player control panel
    uiConfig["controlPanelElements"] = [
      "mute",
      "volume",
      "time_and_duration",
      "fullscreen",
      "overflow_menu",
    ];

    const ui = new shaka.ui.Overlay(player, videoContainer, video);

    ui.configure(uiConfig);
    ui.getControls();

    player.addEventListener("error", this.onErrorEvent);

    player
      .load(manifestUri)
      .then(function () {
        console.log("The video has now been loaded!");
      })
      .catch(this.onError);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.getVH);
    if (this.time) {
      clearTimeout(this.time);
      this.timerHandle = 0;
    }
  };

  render() {
    return (
      <div
        className="video-container"
        ref={this.videoContainer}
        onMouseMove={this.resetTimer}
        onTouchStart={this.resetTimer}
        onKeyDown={this.resetTimer}
      >
        <p id="video-title" className={this.state.isIdle ? "hide" : null}>
          {this.props.movieDetails.title ||
            this.props.movieDetails.original_name}
        </p>
        <button
          id="video-button"
          className={this.state.isIdle ? "hide" : null}
          onClick={() => {
            this.props.setPlay(false);
          }}
        >
          X
        </button>
        <video
          className="shaka-video"
          ref={this.videoComponent}
          autoPlay
          width="100%"
        />
      </div>
    );
  }
}

export default ShakaPlayer;
