import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import img from '../../assets/media/about.jpg';
import './About.css';

class About extends Component {
  render() {
    const {lang} = this.props;
    return (
      <div className='about-main' id='about'>
        <Container>
          <div className='about-img text-center'>
            <img src={img} alt='about'/>
          </div>
          <h1 className='about-head'>{lang.about}</h1>
          <div className="about-content" >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illum, labore eveniet ab rem sit impedit in explicabo quis harum porro ea sed laudantium enim maxime dolor pariatur consectetur dolores.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente aliquam voluptatem qui perspiciatis id illo fuga ipsa laboriosam ex dolorum totam, labore perferendis similique vitae ad deserunt assumenda adipisci praesentium?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cumque voluptates sequi sapiente. Incidunt cupiditate illo neque repellendus quis! Quasi totam tempora libero ipsam odio neque atque laborum omnis aliquam.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat explicabo autem sequi placeat, alias veritatis enim totam officia voluptates suscipit itaque quisquam impedit beatae nihil, nemo ipsa earum tempore dolorem?
              lorem
            </p>
          </div>
        </Container>
      </div>
    )
  }
}
export default About;
