import React, { Component } from 'react'
import { Navbar,Container,Nav} from 'react-bootstrap';
import './Navhead.css';
import logo from '../../assets/media/logo.svg';



class Navhead extends Component {
  render() {
    const {contents} = this.props;
    return (
      <div className='nav-main'>

          <Navbar bg="dark" variant="dark" className='desktop navbar'>
            <Container>
                <Navbar.Brand href='/'>
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{'  '}
                  {contents.projectName}
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className='justify-content-end'>
              <Nav className="me-auto">
                <Nav.Link href='/'>{contents.home}</Nav.Link>
                <Nav.Link href='#about'>{contents.about}</Nav.Link>
                <Nav.Link href='#contact'>{contents.contact}</Nav.Link>
              </Nav>
              </Navbar.Text>
            </Navbar.Collapse>
            </Container>
          </Navbar>


          <Navbar bg="dark" variant="dark" expand="lg" className='mobile navbar'>
          <Container>
            <Navbar.Brand href="/">
            <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{'  '}
              {contents.projectName}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href='/'>{contents.home}</Nav.Link>
                <Nav.Link href='#about'>{contents.about}</Nav.Link>
                <Nav.Link href='#contact'>{contents.contact}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          </Navbar>
      </div>
    )
  }
}
export default Navhead;
