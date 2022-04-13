import React, { Component } from 'react'
import './Period.css'
import { Container,Row,Col,Card} from 'react-bootstrap';
import icon1 from '../../assets/svg/1.svg';
import icon2 from '../../assets/svg/2.svg';
import icon3 from '../../assets/svg/3.svg';
import icon4 from '../../assets/svg/4.svg';



 class Period extends Component {
  render() {
      const {contents} = this.props;
    return (
      <div className='period-main'>
        <Container>
            <h1 className='sec-head'>{contents.investmentProcces}</h1>
            <Row>
                <Col md={3}>
                    <Card className='card'>
                        <Card.Img className='card-img' variant="top" src={icon1} />
                        <Card.Body className='card-body'>
                            <Card.Title className='card-title'>{contents.application}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='card'>
                        <Card.Img className='card-img' variant="top" src={icon2} />
                        <Card.Body className='card-body'>
                            <Card.Title className='card-title'>{contents.preScanning}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='card'>
                        <Card.Img className='card-img' variant="top" src={icon3} />
                        <Card.Body className='card-body'>
                            <Card.Title className='card-title'>{contents.firstMeet}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='card'>
                        <Card.Img className='card-img' variant="top" src={icon4} />
                        <Card.Body className='card-body'>
                            <Card.Title className='card-title'>{contents.investment}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
      </div>
    )
  }
}
export default Period;