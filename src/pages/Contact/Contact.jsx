import React, { useRef } from 'react';
import { Container,Row,Col,Alert} from 'react-bootstrap';
import logo from '../../assets/media/logo.svg';
import './Contact.css';
import emailjs from '@emailjs/browser';



function Contact(props){
  const lang = props.lang;
 
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_vi3mumy',
      'template_iccg3sa',
        e.target,
      'Ierc7hmGaDmVzGCMg'
      ).then(res => {
        message('success');
      }).catch(err =>{
        message('error');
      })
    clearForm(e);
  }
  const clearForm = (e) => {
    e.target.reset();
  }
  const message =  (res) => {
    if(res === 'success'){
       document.getElementById('alertSuccess').classList.remove('d-none');
    } else{
      document.getElementById('alertDanger').classList.remove('d-none');
    }
  }

    return (
          <div className='contact-main'>
            <Container>
              <Row>

                <Col md={4}>
                  <div className='contact-img text-center' id='contact'>
                    <a href="/home">
                      <img src={logo} alt='contact'/>
                    </a>
                  </div>
                  <h4 className='slogan'>{lang.bannerText}</h4>
                  <div className="contact-content">
                    <h5>{lang.address} :</h5>
                    <p> Besiktas/Istanbul - Turkey </p>
                    <h5>{lang.phoneNumber} :</h5>
                    <p>
                      <a href="tel:+">
                        +90 216 333 3333
                      </a>
                    </p>
                  </div>
                </Col>

                <Col md={8}>
                  <h1>{lang.application}</h1>
                  <Alert id='alertSuccess' variant="success" className='d-none'>{lang.successMessage}</Alert>
                  <Alert id='alertDanger' variant="danger" className='d-none'>{lang.errorMessage}</Alert>
                  <form  className='contact-form' ref={form}  onSubmit={sendMail}   >
                    <div className="mb-3 form-group">
                      <label  for='email'>{lang.email}</label>
                      <input  type="email" className='form-control' id='email' name='email' placeholder="Enter email" required='true' />
                    </div>
                    <div className="mb-3 form-group" >
                      <label  for='nameSurname'>{lang.nameSurname} </label>
                      <input  type="text" className='form-control' id='nameSurname' placeholder={lang.nameSurname} required='true' name='from_name' />
                    </div>
                    <div className="mb-3 form-group">
                      <label  for='phone'>{lang.phone} </label>
                      <input  className='form-control' type="text" id='phone' maxLength={11} placeholder={lang.phone} required='true' name='phone_number' />
                    </div>
                    <div className="mb-3 form-group">
                      <label  for='message' className='form-label'>{lang.message}</label>
                      <textarea  as="textarea" className='text-area form-control' id='message'  name='message' rows={3} required='true'/>
                    </div>
                    <input type="submit" className="btn" onSubmit={sendMail} value={lang.send} />
                  </form>

                </Col>
              </Row>
            </Container>
          </div>   
    )
}
export default Contact;
