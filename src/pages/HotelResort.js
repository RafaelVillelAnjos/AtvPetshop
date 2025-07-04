import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rotulo from '../components/Rotulo';
import imgResort1 from '../imagens/fotos-resort/brincadeiras-resort.jpg'
import imgResort2 from '../imagens/fotos-resort/cascata-resort.jpg'
import imgResort3 from '../imagens/fotos-resort/creche-resort.jpg'
import imgResort4 from '../imagens/fotos-resort/equipe-resort.jpg'
import imgResort5 from '../imagens/fotos-resort/equipe2-resort.jpg'
import imgResort6 from '../imagens/fotos-resort/hotel-para-cachorros.jpg'
import imgResort7 from '../imagens/fotos-resort/niver-resort.jpg'
import imgResort8 from '../imagens/fotos-resort/parque-resort.jpg'
import imgResort9 from '../imagens/fotos-resort/parque2-resort.jpg'
import imgResort10 from '../imagens/fotos-resort/piscina-resort.jpg'
import imgResort11 from '../imagens/fotos-resort/quarto-cama-resort.jpeg'
import imgResort12 from '../imagens/fotos-resort/quarto-dubai-resort.jpg'
import imgResort13 from '../imagens/fotos-resort/quarto-resort.jpg'
import imgResort14 from '../imagens/fotos-resort/resort-cachorro.jpg'
import imgResort15 from '../imagens/fotos-resort/resort-camping.jpg'
import imgResort16 from '../imagens/fotos-resort/spa-resort.jpg'

function HotelResort() {
	return (
		<div>
		<Container fluid className="px-0">
			<Row>
				<Col>
					<Rotulo rotulo='Hotel Resort'/>
				</Col>
			</Row>	
		</Container>

		<Container className="py-3">
			<Row>
				<Col>
					<p class='textoResort'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor lobortis sodales. In non nulla sit amet quam porttitor consequat. Nulla facilisi. Maecenas suscipit luctus est, et facilisis velit. Suspendisse rhoncus ultricies porta. Vestibulum interdum nunc volutpat semper porta. Integer mollis laoreet porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor lobortis sodales. In non nulla sit amet quam porttitor consequat. Nulla facilisi. Maecenas suscipit luctus est, et facilisis velit. Suspendisse rhoncus ultricies porta. Vestibulum interdum nunc volutpat semper porta. Integer mollis laoreet porta.</p>
				</Col>
			</Row>

			<Row>
				<Col className="py-3">
					<h2>Conheça nosso serviços</h2>
				</Col>
			</Row>

			<Row>
				<Col>
					<div class='linhaImgResort'>
						<img src={imgResort1} />
						<img src={imgResort2} />
						<img src={imgResort3} />
						<img src={imgResort4} />
					</div>
				</Col>

				<Col>
					<div class='linhaImgResort'>
						<img src={imgResort5} />
						<img src={imgResort6} />
						<img src={imgResort7} />
						<img src={imgResort8} />
					</div>
				</Col>

				<Col>
					<div class='linhaImgResort'>
						<img src={imgResort9} />
						<img src={imgResort10}/>
						<img src={imgResort11}/>
						<img src={imgResort12}/>
					</div>
				</Col>

				<Col>
					<div class='linhaImgResort'>
						<img src={imgResort13} />
						<img src={imgResort14} />
						<img src={imgResort15} />
						<img src={imgResort16} />
					</div>
				</Col>
			</Row>
		</Container>
		</div>
	);
}

export default HotelResort;
