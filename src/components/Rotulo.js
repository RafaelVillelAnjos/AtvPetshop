import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TituloBanhoTosa({rotulo}){
    return(
        <Container fluid className='px-0'>
            <Row>
                <Col lg='6' md='6' sm='6'>
                    <div class='tituloBanhoTosa'>
                        <h1>{ rotulo }</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default TituloBanhoTosa;