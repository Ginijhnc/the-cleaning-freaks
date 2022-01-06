import styled from 'styled-components/macro';

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 50px;

	&:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		filter: blur(50px);
		z-index: -1;
	}
`;

export const ContactBox = styled.div`
	max-width: 450px;
	display: grid;
	justify-content: center;
	align-items: center;
	text-align: center;

	@media screen and (max-width: 880px) {
		grid-template-columns: 1fr;
	}
`;

export const Right = styled.div`
	padding: 25px 40px;
`;
