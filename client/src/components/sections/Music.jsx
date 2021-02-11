import React from 'react'
import sound from "../../public/assets/sound1.png"
import './music.scss'

class Music extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 'play': false };
      this.url = props.src;
      this.audio = new Audio(this.url);
      this.audio.preload = 'none';
      this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
      this.setState({'play': !this.state.play}, () => {
          this.state.play ? this.audio.play() : this.audio.pause();
      });
  }

  componentWillUnmount () {
      this.audio.pause();
  }

  render() {
      return (
          <div style={this.props.style} className={this.props.className}>
              {this.state.play
                  ? <img id='sound' src={sound} alt='sound'aria-label="Pause" onClick={this.togglePlay}/>
                  : <img id='sound' src={sound} alt='sound'aria-label="Play" onClick={this.togglePlay}/>}
          </div>
      );
  }
}

export default Music;