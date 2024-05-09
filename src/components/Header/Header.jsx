import React from 'react';
import { ReactComponent as Logo } from '../../assets/img/Icon.svg';
import style from './header.module.css';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<header className={style.header}>
				<Logo />
				<Nav />
			</header>
			<Outlet />
		</>
	);
};

export default Header;
