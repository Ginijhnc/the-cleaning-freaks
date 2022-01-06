import styled from 'styled-components/macro';

export const ServiceTitle = styled.h3`
	margin-bottom: 15px;
	min-width: 110%;
	font-size: 27px;
	line-height: 1.2em;
	font-weight: 600;
	color: #4c5ba4;
	font-family: 'Poppins', Sans-serif;
	text-align: center;

	@media screen and (max-width: 900px) {
		max-width: 90%;
	}
`;

export const LearnContainer = styled.div`
	max-width: 60%;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: center;
`;

export const LearnMoreText = styled.h5`
	//max-width: 60%;
	font-size: 15px;
	line-height: 1.2em;
	font-weight: 500;
	color: #444444;
	font-family: 'Poppins', Sans-serif;
	text-align: center;

	@media screen and (max-width: 900px) {
		font-size: 18px;
		max-width: 90%;
	}
`;

export const DivWrapper = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;

	@media screen and (max-width: 700px) {
		flex-direction: column;
	}
`;

export const Wrapper = styled.div`
	margin: 10px;
	padding: 10px 50px 0px 50px;
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		transition: 0.2s ease-out;
	}

	img:hover {
		transition: 0.2s ease-out;
		transform: scale(1.1) rotate(7deg);
	}
`;
