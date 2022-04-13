import React, { Component } from 'react'
import Next from '../../components/next-gen/Next';
import Banner from '../../components/banner/Banner';
import Critera from '../../components/our-critera/Critera';
import Invest from '../../components/invest/Invest';
import Period from '../../components/period/Period';
import Apply from '../../components/aplly/Apply';

class Home extends Component {
  render() {
      const {lang} = this.props;
    return (
      <div className='home-main'>
        <Next contents={lang}/>
        <hr size="4.5"/>
        <Critera contents={lang}/>
        <hr size="4.5"/>
        <Invest contents={lang}/>
        <hr size="4.5"/>
        <Period contents={lang}/>
        <hr size="4.5"/>
      </div>
    )
  }
}
export default Home;
