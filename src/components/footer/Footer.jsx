import React, { Component } from 'react'
import { Row,Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  render() {
      const {contents} = this.props;
    return (
      <footer className="footer">
          <Container>
              <Row className='logo'>
                <a href="/">
                      <h2>{contents.projectName}</h2>
                </a>
              </Row>
              <Row className='footer-links'>
                   <Col md={3}>
                       <a href="/">
                       {contents.home}
                        </a>
                   </Col>
                   <Col md={3}>
                       <a href="#about">
                       {contents.about}
                       </a>
                   </Col>
                   <Col md={3}>
                       <a href="#contact">
                       {contents.contact}
                       </a>
                   </Col>
                   <Col md={3}>
                       <a href="#contact">
                        {contents.application}
                       </a>
                   </Col>
              </Row>
              <Row>
                <h5 className='footer-text'>{contents.bannerText}</h5>
                <p className='copy'>
                  <span>&copy; {contents.projectName}</span> {new Date().getFullYear()}. All Rights Reserved.
                </p>     
            </Row>       
          </Container>
      </footer>
    )
  }
}
export default Footer;