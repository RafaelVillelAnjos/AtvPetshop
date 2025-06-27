import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgBanner from '../imagens/adestramento/banner-adestramento.jpg'
import Accordion from 'react-bootstrap/Accordion';

const Adestramento = () => {
	return (
		<div>
			<Container fluid className="px-0">
				<Row>
					<Col lg='12' md='12' sm='12'>
						<img src={imgBanner} class='bannerAdestramento'/>
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
			</Container>
		</div>

	);
};

export default Adestramento;
