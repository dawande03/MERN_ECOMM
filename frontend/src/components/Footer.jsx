import React from 'react'
import{Col,Row,Container} from 'react-bootstrap'
const Footer = () => {
  return (
    <div>
        <footer>
            <Container>
                <Row>
                    <Col className='text-center'>
                    <span className='text-center'>
                        Copyright &copy; Dawande 
                    </span>
                    </Col>
                </Row>
            </Container>
        </footer>
    </div>
  )
}

export default Footer