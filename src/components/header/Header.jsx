import React, { Component } from 'react';
import { Navbar,Container} from 'react-bootstrap';
import './Header.css';
import flagTR from '../../assets/media/flags/TR.png';
import flagUS from '../../assets/media/flags/US.png';


class Header extends Component {
    state = {  
        flag:flagUS
    }
  render() {
    const {contents,changeLanguage} = this.props;
    return (
      <div id='header'>
         <Navbar className='header'>
            <Container>
                <Navbar.Brand>
                    <span className='header-text'>{contents.headerText}</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <img className='flag' src={this.state.flag} alt='flag' onClick={()=>{
                        changeLanguage();
                        this.state.flag === flagUS ? this.setState({flag:flagTR}) : this.setState({flag:flagUS});
                    }}/>
                    <span className='lang-text'>{this.state.flag === flagUS ? 'EN' : 'TR'}</span>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    )
  }
}
export default Header;