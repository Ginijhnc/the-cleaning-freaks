import React from 'react';

import {
	Container,
	Pane,
	Image,
	BackgroundColor,
	Title,
} from './InteriorInfo.elements';
import InteriorProcess1 from '../../media/InteriorProcess1.jpg';
import InteriorProcess2 from '../../media/InteriorProcess2.jpg';
import ListItem from './ListItem';
import InteriorData from './InteriorData.json';

function InteriorInfo(props) {
	return (
		<>
			<BackgroundColor>
				<Title>Our Process</Title>
				<Container direction={'row'} style={{ paddingBottom: '6%' }}>
					<Pane style={{ alignItems: 'flex-end' }}>
						<Image
							src={InteriorProcess1}
							style={{ paddingBottom: '20px', height: '450px', width: '350px' }}
						/>
					</Pane>
					<Pane>
						<ListItem page={InteriorData} start={0} end={3} />
					</Pane>
				</Container>
				<Container direction={'row-reverse'}>
					<Pane style={{ alignItems: 'center' }}>
						<Image src={InteriorProcess2} style={{ paddingBottom: '20px' }} />
					</Pane>
					<Pane>
						<ListItem page={InteriorData} start={3} end={7} />
					</Pane>
				</Container>
			</BackgroundColor>
		</>
	);
}

export default InteriorInfo;
