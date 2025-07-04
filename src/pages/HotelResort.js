import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
		<Container>
			<Row>
				<Col>
					<div class='linhaImgResort'>
						<img src={imgResort1} class='imgResort'/>
						<img src={imgResort2} class='imgResort'/>
						<img src={imgResort3} class='imgResort'/>
						<img src={imgResort4} class='imgResort'/>
					</div>
				</Col>

				<Col>
					<div class='linhaImgResort'>
						<img src={imgResort5} class='imgResort'/>
						<img src={imgResort6} class='imgResort'/>
						<img src={imgResort7} class='imgResort'/>
						<img src={imgResort8} class='imgResort'/>
					</div>
				</Col>

				<Col>
					<div class='linhaImgResort'>
						<img src={imgResort9} class='imgResort'/>
						<img src={imgResort10} class='imgResort'/>
						<img src={imgResort11} class='imgResort'/>
						<img src={imgResort12} class='imgResort'/>
					</div>
				</Col>

				<Col>
					<div class='linhaImgResort'>
						<img src={imgResort13} class='imgResort'/>
						<img src={imgResort14} class='imgResort'/>
						<img src={imgResort15} class='imgResort'/>
						<img src={imgResort16} class='imgResort'/>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default HotelResort;
