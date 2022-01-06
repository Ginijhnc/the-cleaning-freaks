import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import InteriorsB from '../../media/InteriorsB.png';
import ExteriorsB from '../../media/ExteriorsB.png';
import {
	LearnContainer,
	LearnMoreText,
	ServiceTitle,
	DivWrapper,
	Wrapper,
} from './ServicesOffered.elements';

function ServicesOffered() {
	return (
		<>
			<DivWrapper>
				<Wrapper>
					<Link to='/interior-cleaning'>
						<img src={InteriorsB} alt='interior cleaning' />
					</Link>
					<ServiceTitle>Interior Cleaning</ServiceTitle>
					<LearnContainer>
						<LearnMoreText>Learn More</LearnMoreText>
						<Link to='/interior-cleaning'>
							<FontAwesomeIcon
								icon={faArrowCircleRight}
								style={{
									color: '#4C5BA4',
									marginLeft: '7px',
									cursor: 'pointer',
								}}
							/>
						</Link>
					</LearnContainer>
				</Wrapper>
				<Wrapper>
					<Link to='/exterior-cleaning'>
						<img src={ExteriorsB} alt='exterior cleaning' />
					</Link>
					<ServiceTitle>Exterior Cleaning</ServiceTitle>
					<LearnContainer>
						<LearnMoreText>Learn More</LearnMoreText>
						<Link to='/exterior-cleaning'>
							<FontAwesomeIcon
								icon={faArrowCircleRight}
								style={{
									color: '#4C5BA4',
									marginLeft: '7px',
									cursor: 'pointer',
								}}
							/>
						</Link>
					</LearnContainer>
				</Wrapper>
			</DivWrapper>
		</>
	);
}

export default ServicesOffered;
