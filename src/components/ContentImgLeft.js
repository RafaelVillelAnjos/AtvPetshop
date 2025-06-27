import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContentBanhoTosa({imagem, textoAltImagem, texto1, texto2}){
    return(
        <Container>
            <Row>
                <Col lg='6' md='6' sm='12'>
                    <div class='imgContentBT'>
                        <img src={imagem} alt={textoAltImagem}/>
                    </div>
                </Col>

                <Col lg='6' md='6' sm='12'>
                    <div class='txtContentBT'>
                        <p>{texto1}</p>

                        <p>{texto2}</p>

                        <button>Saiba mais</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ContentBanhoTosa;