import React from 'react';
import rooftop from '../../media/rooftop.mp4';
import {
	Container,
	Pane,
	Image,
	BackgroundColor,
	Title,
} from './ExteriorInfo.elements';
import ListItem from './ListItem';
import ExteriorData from './ExteriorData.json';
import ExteriorProcess2 from '../../media/ExteriorProcess2.jpg';

function ExteriorInfo(props) {
	return (
		<>
			<BackgroundColor>
				<Title>Our Process</Title>
				<Container direction={'row'} style={{ paddingBottom: '6%' }}>
					<Pane style={{ alignItems: 'flex-end' }}>
						<video
							width='330'
							height='480'
							src={rooftop}
							controls
							controlslist='nodownload'
							style={{ paddingBottom: '30px' }}
						>
							Your browser does not support the video tag.
						</video>
					</Pane>
					<Pane>
						<ListItem page={ExteriorData} start={0} end={3} />
					</Pane>
				</Container>
				<Container direction={'row-reverse'}>
					<Pane style={{ alignItems: 'center' }}>
						<Image src={ExteriorProcess2} style={{ paddingBottom: '20px' }} />
					</Pane>
					<Pane>
						<ListItem page={ExteriorData} start={3} end={6} />
					</Pane>
				</Container>
			</BackgroundColor>
		</>
	);
}

export default ExteriorInfo;
