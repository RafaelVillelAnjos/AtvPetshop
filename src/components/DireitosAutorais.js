import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DireitosAutorais() {
  
  const ano = new Date().getFullYear()

  return (
    <Container fluid className='direitosAutorais'>
        <Row>
            <Col>
                &copy; { ano } Pet Shop - Todos os Direitos Reservados
            </Col>
      </Row>
    </Container>
  )
}

export default DireitosAutorais