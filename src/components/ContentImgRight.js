import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContentImgRight({imagem, textoAlt, texto}){
    return(
        <Container fluid className='px-2 py-4'>
            <Row>
                <Col lg='9' md='6' sm='12'>
                    <div class='txt_CIR_BT'>
                        <p>{texto}</p>

                        <button>Saiba mais</button>
                    </div>
                </Col>

                <Col lg='3' md='6' sm='12'>
                    <img src={imagem} alt={textoAlt} class='img_CTR'/>
                </Col>
            </Row>
        </Container>
    )
}

export default ContentImgRight;