import styled from 'styled-components/macro';

export const ItemContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const ItemSubContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ItemTitle = styled.h3`
	font-size: 18px;
	line-height: 1.3;
	margin-bottom: 3px;
	font-family: 'Poppins', sans-serif;
	color: #54595f;

	@media (max-width: 600px) {
		text-align: left;
		font-size: 16px;
	}
`;

export const ItemSubTitle = styled.p`
	font-size: 16px;
	line-height: 1.4;
	margin-bottom: 8px;
	padding-bottom: 20px;
	font-family: 'Poppins', sans-serif;
	color: #54595f;

	@media (max-width: 600px) {
		text-align: left;
		font-size: 14px;
	}
`;

