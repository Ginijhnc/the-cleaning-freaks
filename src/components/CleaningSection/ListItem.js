import React from 'react';
import CheckSvg from '../../CheckSvg.svg';
import {
	ItemTitle,
	ItemSubTitle,
	ItemContainer,
	ItemSubContainer,
} from './ListItem.elements';

const ListItem = props => {
	return (
		<>
			{props.page &&
				props.page.listItems.slice(props.start, props.end).map(item => (
					<ItemContainer key={item.id}>
						<img
						src={CheckSvg}
						alt='check'
						height='27em'
						style={{
							filter:
								'invert(34%) sepia(12%) saturate(3102%) hue-rotate(193deg) brightness(89%) contrast(85%)',
							transform:'scale(1.0)',
							paddingRight: '15px',
							marginBottom: '15px',
						}}
					/>
						<ItemSubContainer>
							<ItemTitle>{item.header}</ItemTitle>
							<ItemSubTitle>{item.body}</ItemSubTitle>
						</ItemSubContainer>
					</ItemContainer>
				))}
		</>
	);
};

export default ListItem;
