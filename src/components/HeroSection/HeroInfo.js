import React from 'react';
import {
	InfoSubtitle,
	InfoTitle,
	ContainerHero,
	Hero,
	TextContainer,
	CompanyImage,
} from './HeroInfo.elements';
import LogoLg from '../../media/LogoLg.png';

function HeroInfo() {
	return (
		<>
			<ContainerHero>
				<Hero>
					<TextContainer>
						<InfoTitle>Freaky Clean!</InfoTitle>
						<InfoSubtitle>
							Hey there! We are The Cleaning Freaks, LLC. Is your home or
							business missing a little TLC?
						</InfoSubtitle>
					</TextContainer>
					<CompanyImage>
						<img src={LogoLg} alt='company logo'></img>
					</CompanyImage>
				</Hero>
			</ContainerHero>
		</>
	);
}

export default HeroInfo;
