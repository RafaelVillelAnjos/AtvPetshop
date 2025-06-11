import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contato() {
  return (
    <Container fluid className='contato'>
    <Row>
      <Col>
        <h1>Fale Conosco</h1>
      </Col>
    </Row>

    <Row>
      <Col lg='6' md='6' sm='12'>
        <form>
          <div className='linhaForm'>
            <input type='text' placeholder='Nome' required></input>
          </div>

          <div className='linhaForm'>
            <input type='email' placeholder='Email' required></input>
          </div>

          <div className='linhaForm'>
            <textarea placeholder='Mensagem' required></textarea>
          </div>

          <div class='linhaForm'>
            <input type='submit' value='Enviar'></input>
          </div>
        </form>
      </Col>

      <Col lg='6' md='6' sm='12'>
        <div className='linhaForm'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16" className='simbTele'>
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg>
        </div>

        
      </Col>
    </Row>
  </Container>
  )
}

export default Contato
