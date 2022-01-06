import styled from 'styled-components/macro';

export const Container = styled.div`
	z-index: 1;
	max-width: 100%;
	margin-right: auto;
	padding-right: 200px;
	padding-left: 200px;
	background-color: #f6fcff;

	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export const AboutSubTitle = styled.h4`
	font-size: 18px;
	line-height: 1.3em;
	font-weight: 600;
	color: #444444ed;
	font-family: 'Poppins', Sans-serif;
	text-align: center;
	padding: 20px 0px;
`;

export const AboutDescription = styled.h6`
	font-size: 15px;
	line-height: 1.3em;
	font-weight: 400;
	color: #444444ed;
	font-family: 'Poppins', Sans-serif;
	text-align: center;
	padding-bottom: 20px;
`;

export const AboutRow = styled.div`
	display: grid;
	gap: 1.5rem;
	row-gap: 2.5rem;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

	@media screen and (max-width: 1108px) {
		display: flex;
		flex-direction: column;
		padding: 0px 30px;
	}
`;

export const AboutColumn = styled.div`
	text-align: center;
`;
