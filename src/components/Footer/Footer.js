import React from 'react';
import {
	Container,
	FooterDescription,
	ImgWrapper,
	InfoContainer,
	InfoItem,
	SocialsContainer,
} from './Footer.elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {
	faPhone,
	faMapMarkerAlt,
	faClock,
} from '@fortawesome/free-solid-svg-icons';
import LogoLg from '../../media/LogoLg.png';

function Footer() {
	return (
		<>
			<Container>
				<ImgWrapper>
					<img width='15%' src={LogoLg} alt='company logo' />
					<FooterDescription>
						We are The Cleaning Freaks, LLC. Is your home or business missing a
						little TLC? We know it’s not your fault! Pressure Washing:
						Sidewalks, Driveways, Roofs & Home Exteriors. We also focus on
						Residential/Commercial Interior Cleaning!
					</FooterDescription>
					<SocialsContainer>
						<FontAwesomeIcon
							icon={faFacebook}
							size='2x'
							style={{ color: '#31C2FF', cursor: 'pointer' }}
						/>
						<FontAwesomeIcon
							icon={faInstagram}
							size='2x'
							style={{ color: '#31C2FF', cursor: 'pointer' }}
						/>
					</SocialsContainer>
					<InfoContainer>
						<InfoItem>
							<FontAwesomeIcon
								icon={faPhone}
								style={{ color: '#31C2FF', marginRight: '6px' }}
							/>
							<p
								style={{
									fontFamily: 'Helvetica',
									fontStyle: 'Oblique',
									fontWeight: 500,
									color: 'white',
								}}
							>
								(100) 123-4567
							</p>
						</InfoItem>
						<InfoItem>
							<FontAwesomeIcon
								icon={faMapMarkerAlt}
								style={{ color: '#31C2FF', marginRight: '6px' }}
							/>
							<p
								style={{
									fontFamily: 'Helvetica',
									fontStyle: 'Oblique',
									fontWeight: 500,
									color: 'white',
								}}
							>
								South Florida
							</p>
						</InfoItem>
						<InfoItem>
							<FontAwesomeIcon
								icon={faClock}
								style={{ color: '#31C2FF', marginRight: '6px' }}
							/>
							<p
								style={{
									fontFamily: 'Helvetica',
									fontStyle: 'Oblique',
									fontWeight: 500,
									color: 'white',
								}}
							>
								08:00 - 16:00
							</p>
						</InfoItem>
					</InfoContainer>
				</ImgWrapper>
			</Container>
		</>
	);
}

export default Footer;
