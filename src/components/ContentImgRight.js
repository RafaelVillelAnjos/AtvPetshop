import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContentImgRight({imagem, textoAlt}){
    return(
        <Container fluid className='px-2 py-4'>
            <Row>
                <Col lg='9' md='9' sm='9'>
                    <div class='txt_CIR_BT'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis neque vitae auctor elementum. Morbi luctus molestie lacus, ut porttitor risus dapibus vel. Aliquam dapibus ligula quis quam hendrerit efficitur.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis neque vitae auctor elementum. Morbi luctus molestie lacus, ut porttitor risus dapibus vel. Aliquam dapibus ligula quis quam hendrerit efficitur.</p>

                        <button>Saiba mais</button>
                    </div>
                </Col>

                <Col lg='3' md='3' sm='3'>
                    <img src={imagem} alt={textoAlt} class='img_CTR'/>
                </Col>
            </Row>
        </Container>
    )
}

export default ContentImgRight;