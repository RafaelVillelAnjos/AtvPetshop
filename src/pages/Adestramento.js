import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgBanner from '../imagens/adestramento/banner-adestramento.jpg'
import Accordion from 'react-bootstrap/Accordion';
import imgAdestramento1 from '../imagens/adestramento/adestramento1.jpg'
import imgAdestramento2 from '../imagens/adestramento/adestramento2.jpg'
import imgAdestramento3 from '../imagens/adestramento/adestramento3.jpg'
import imgAdestramento4 from '../imagens/adestramento/adestramento4.jpg'
import imgAdestramento5 from '../imagens/adestramento/adestramento5.jpg'


const Adestramento = () => {
	return (
		<div>
			<Container fluid>
				<Row>
					<Col lg='12' md='12' sm='12'>
						<img src={imgBanner} class='bannerAdestramento' alt='Banner da página de adestramento'/>
					</Col>
				</Row>
			</Container>

			<Container className="py-3">
				<Row>
					<Col>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor lobortis sodales. In non nulla sit amet quam porttitor consequat. Nulla facilisi. Maecenas suscipit luctus est, et facilisis velit. Suspendisse rhoncus ultricies porta. Vestibulum interdum nunc volutpat semper porta. Integer mollis laoreet porta.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor lobortis sodales. In non nulla sit amet quam porttitor consequat. Nulla facilisi. Maecenas suscipit luctus est, et facilisis velit. Suspendisse rhoncus ultricies porta. Vestibulum interdum nunc volutpat semper porta. Integer mollis laoreet porta.</p>
					</Col>
				</Row>
			</Container>

			<Container>
				<Row>
					<Col>
						<img src={imgAdestramento1} />
						<img src={imgAdestramento2} />
						<img src={imgAdestramento3} />
						<img src={imgAdestramento4} />
						<img src={imgAdestramento5} />
					</Col>
				</Row>
			</Container>

			<Container>
				<Row>
					<Col>
					<h2>Perguntas frequentes</h2>

					<Accordion defaultActiveKey="0">
      				<Accordion.Item eventKey="0">
        				<Accordion.Header>Accordion Item #1</Accordion.Header>
        				<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.
        				</Accordion.Body>
      				</Accordion.Item>
      				<Accordion.Item eventKey="1">
        				<Accordion.Header>Accordion Item #2</Accordion.Header>
        				<Accordion.Body>
          					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          					aliquip ex ea commodo consequat. Duis aute irure dolor in
          					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          					culpa qui officia deserunt mollit anim id est laborum.
        				</Accordion.Body>
      				</Accordion.Item>
					<Accordion.Item eventKey="2">
        				<Accordion.Header>Accordion Item #3</Accordion.Header>
        				<Accordion.Body>
          					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          					aliquip ex ea commodo consequat. Duis aute irure dolor in
          					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          					culpa qui officia deserunt mollit anim id est laborum.
        				</Accordion.Body>
      				</Accordion.Item>
					</Accordion>
					</Col>
				</Row>

			</Container>
		</div>

	);
};

export default Adestramento;
