import styled from 'styled-components/macro';

export const Pane = styled.div`
	display: flex;
	width: 45%;
	margin: 0 auto;
	justify-content: center;
	flex-direction: column;
	align-items: flex-end;

	@media (max-width: 1000px) {
		width: 100%;
		padding: 0 20px;
		align-items: center !important;
	}
`;

export const Image = styled.img`
	@media (max-width: 1000px) {
		width: 100%;
	}
`;

export const BackgroundColor = styled.div`
	padding-top: 60px;
	padding-bottom: 60px;
	background-color: #f6fcff;
`;

export const Container = styled.div`
	display: flex;
	margin: 0 auto;
	flex-direction: ${({ direction }) => direction};
	width: 75%;

	@media (max-width: 800px) {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
`;

export const Title = styled.h2`
  margin-bottom: 25px;
  font-size: 34px;
  line-height: 1.2em;
  font-weight: 600;
  color: #444444;
  font-family: "Poppins", Sans-serif;
  text-align: center;
`;
