import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgBT from '../imagens/banho-tosa.jpg';

function ContentBanhoTosa(){
    return(
        <Container>
            <Row>
                <Col lg='6' md='6' sm='12'>
                    <div class='imgContentBT'>
                        <img src={imgBT}/>
                    </div>
                </Col>

                <Col lg='6' md='6' sm='12'>
                    <div class='txtContentBT'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis commodo purus, et dapibus dolor varius eu. Nullam a nulla sagittis tellus auctor condimentum. Nulla vehicula ante tortor, viverra malesuada ipsum viverra et.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis commodo purus, et dapibus dolor varius eu. Nullam a nulla sagittis tellus auctor condimentum. Nulla vehicula ante tortor, viverra malesuada ipsum viverra et.
                        </p>

                        <button>Saiba mais</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ContentBanhoTosa;