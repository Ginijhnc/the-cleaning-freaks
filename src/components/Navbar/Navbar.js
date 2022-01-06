import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
} from './Navbar.elements';
import { HashLink } from 'react-router-hash-link';
import LogoSm from '../../media/LogoSm.png';
import styled from 'styled-components';

const StyledHashLink = styled(HashLink)`
	color: #fff;
	font-family: 'Poppins', Sans-serif;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	font-size: 16px;

	@media screen and (max-width: 1024px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		font-size: 20px;

		&:hover {
			color: #31c2ff;
			transition: all 0.3s ease;
		}
	}
`;

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 1024) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<>
			<IconContext.Provider value={{ color: 'white' }}>
				<Nav>
					<NavbarContainer>
						<NavLogo to='/' onClick={closeMobileMenu}>
							<img src={LogoSm} alt='Logo' />
						</NavLogo>
						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobileIcon>
						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<StyledHashLink smooth to={'/#home'} onClick={closeMobileMenu}>
									Home
								</StyledHashLink>
							</NavItem>
							<NavItem>
								<StyledHashLink
									smooth
									to={'/#services'}
									onClick={closeMobileMenu}
								>
									Services
								</StyledHashLink>
							</NavItem>
							<NavItem>
								<StyledHashLink smooth to={'/#about'} onClick={closeMobileMenu}>
									About
								</StyledHashLink>
							</NavItem>
							<NavItem>
								<StyledHashLink
									smooth
									to={'/#estimation'}
									onClick={closeMobileMenu}
								>
									Free Estimation
								</StyledHashLink>
							</NavItem>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;
