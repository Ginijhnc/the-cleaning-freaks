import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faComments,
	faUserCheck,
	faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
	AboutColumn,
	AboutDescription,
	AboutRow,
	AboutSubTitle,
	Container,
} from './AboutSection.elements';
import { Title } from '../../globalStyles';

function AboutSection() {
	return (
		<>
			<Container id='about'>
				<Title>About Us</Title>
				<AboutRow>
					<AboutColumn>
						{/* TO DO: Dynamic rendering with .map() */}
						<FontAwesomeIcon
							icon={faComments}
							size='3x'
							style={{ color: '#4C5BA4' }}
						/>
						<AboutSubTitle>Customer Recommended</AboutSubTitle>
						<AboutDescription>
							Vivamus vel tristique erat. Duis eros diam, lacinia nec arcu quis,
							viverra suscipit sem.
						</AboutDescription>
					</AboutColumn>
					<AboutColumn>
						<FontAwesomeIcon
							icon={faUserCheck}
							size='3x'
							style={{ color: '#4C5BA4' }}
						/>
						<AboutSubTitle>Trusted and Vetted Cleaners</AboutSubTitle>
						<AboutDescription>
							Vivamus vel tristique erat. Duis eros diam lacinia nec arcu quis,
							viverra suscipit sem orbi scelerisque sapien.
						</AboutDescription>
					</AboutColumn>
					<AboutColumn>
						<FontAwesomeIcon
							icon={faShieldAlt}
							size='3x'
							style={{ color: '#4C5BA4' }}
						/>
						<AboutSubTitle>Commitment to Safety</AboutSubTitle>
						<AboutDescription>
							Vivamus vel tristique erat. Duis eros diam, lacinia nec arcu quis,
							viverra suscipit sem.
						</AboutDescription>
					</AboutColumn>
				</AboutRow>
			</Container>
		</>
	);
}

export default AboutSection;
