import React, { Component } from 'react'
import '../next-gen/Next.css';
import img from '../../assets/media/critera.jpg';
import {Container, Row, Col} from 'react-bootstrap';

 class Critera extends Component {
    render() {
        const {contents} = this.props;
      return (
        <div className='next-main'>
        <Container>
          <Row>
            <Col md={6} className='text'>
              <h1>{contents.ourCritera}</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione vero minus sint velit minima id, dolorem eum iusto dolor porro ullam ipsa consequuntur dolorum labore doloremque dolore doloribus, vel nihil?
              </p>
            </Col>
            <Col md={6}>
                <img src={img}  alt="" srcset="" />
            </Col>
          </Row>
        </Container>
        </div>
      )
    }
}
export default Critera;