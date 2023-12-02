import Container from 'react-bootstrap/Container';
import  Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6} className='text-center text-sm-start mt-3 font-semibold'>
                <p>BlackRing.dev</p>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end mt-3">
              <p>Copyright 2022. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }