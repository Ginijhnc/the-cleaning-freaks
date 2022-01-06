import React from 'react';
import {
	CleaningContainer,
	CleaningSubTitle,
	CleaningTitle,
} from './ContentHeader.elements';

function ContentHeader(props) {
	return (
		<>
			<CleaningContainer style={{ backgroundImage: `url(${props.headerImage})` }}>
				<CleaningTitle>{props.data.header.title}</CleaningTitle>
				<CleaningSubTitle>{props.data.header.subtitle}</CleaningSubTitle>
			</CleaningContainer>
		</>
	);
}

export default ContentHeader;
