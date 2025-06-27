import React from "react";
import Rotulo from "../components/Rotulo"
import ContentBanhoTosa from "../components/ContentImgLeft";
import imagem1 from '../imagens/banho-tosa.jpg'
import CallToAction from '../components/CallToAction';
import ContentImgRight from "../components/ContentImgRight";
import imagem2 from '../imagens/vacina-cachorro.jpg';

const BanhoTosa = () => {
	return (
		<div>
			<Rotulo rotulo='Banho e Tosa' />
			<ContentBanhoTosa imagem={imagem1} textoAltImagem='Foto de um cachorro recebendo o serviço de banho' texto1='cachorro super fofo resgatado da rua ranulpho jose de souza sobrinho, em frente ao choripan floripa, recendo um belo banho, com meus espuma, para virar um cachorro respeitavl de novo. obrigada' texto2='cachorro super fofo resgatado da rua ranulpho jose de souza sobrinho, em frente ao choripan floripa, recendo um belo banho, com meus espuma, para virar um cachorro respeitavl de novo. obrigada '/>
			<CallToAction textoCTA='Pet care'/>
			<ContentImgRight imagem={imagem2} textoAlt='Imagem de um cachorro sendo vacinado.'/>
		</div>
	);
};

export default BanhoTosa;
