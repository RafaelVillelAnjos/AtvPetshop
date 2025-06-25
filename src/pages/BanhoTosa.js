import React from "react";
import Rotulo from "../components/Rotulo"
import ContentBanhoTosa from "../components/ContentImgLeft";
import imagem from '../imagens/banho-tosa.jpg'

const BanhoTosa = () => {
	return (
		<div>
			<Rotulo rotulo='Banho e Tosa' />
			<ContentBanhoTosa imagem={imagem} textoAltImagem='Foto de um cachorro recebendo o serviço de banho' texto='cachorro super fofo resgatado da rua ranulpho jose de souza sobrinho, em frente ao choripan floripa, recendo um belo banho, com meus espuma, para virar um cachorro respeitavl de novo. obrigada '/>
		</div>
	);
};

export default BanhoTosa;
