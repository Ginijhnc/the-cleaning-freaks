import styled from 'styled-components/macro';

export const ContainerHero = styled.main`
	width: min(1100px, 70%);
	margin: 0 auto;
`;

export const Hero = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 5rem 0;

	@media screen and (max-width: 769px) {
		flex-direction: column;
	}
`;

export const TextContainer = styled.h1`
	flex: 2;
	padding-right: 100px;

	@media screen and (max-width: 769px) {
		padding-left: 100px;
		width: 200%;
	}
`;

export const InfoTitle = styled.h1`
	margin-bottom: 14px;
	font-size: 65px;
	line-height: 1.2em;
	font-weight: 600;
	color: white;
	font-family: 'Poppins', Sans-serif;
	font-weight: 500;
	text-shadow: -4px 4px 35px rgba(0, 0, 0, 0.5),
		4px -4px 35px rgba(0, 0, 0, 0.6);

	@media screen and (max-width: 769px) {
		text-align: center;
		font-size: 60px;
	}
`;

export const InfoSubtitle = styled.h3`
	max-width: 600px;
	font-size: 23px;
	color: white;
	font-family: 'Poppins', Sans-serif;
	font-weight: 500;
	line-height: 1.3em;
	text-shadow: -4px 4px 35px rgba(0, 0, 0, 0.9), 4px -4px 35px rgba(0, 0, 0, 1);

	@media screen and (max-width: 769px) {
		text-align: center;
		text-align: center;
		align-items: center;
		margin: 0 auto;
	}
`;

export const CompanyImage = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
`;
