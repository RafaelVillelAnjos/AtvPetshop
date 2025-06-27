import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CallToAction({textoCTA}){
    return(
        <Container>
            <Row>
                <Col>
                    <div class='CTA_div'>
                        <h1>{textoCTA}</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CallToAction;