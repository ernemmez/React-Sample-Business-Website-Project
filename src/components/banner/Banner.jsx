import React, { Component } from 'react'
import './Banner.css'
import video from '../../assets/media/banner-video.mp4';
import TypeWriter from 'react-typewriter';

 class Banner extends Component {
  render() {
      const {contents} = this.props;
    return (
      <div className='banner-main'>
        <div className="banner">
            <video src={video} autoPlay loop></video>
        </div>
        <div className="banner-text">
          <TypeWriter typing={0.4} >
            <h1>{contents.bannerText}</h1>
          </TypeWriter>
        </div>
      </div>
    )
  }
}
export default Banner;