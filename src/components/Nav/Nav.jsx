import React from 'react';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className={style.nav}>
			<Link to={'/'}>Home</Link>
			<Link to={'/games'}>Games</Link>
			<Link to={'/library'}>Library</Link>
			<Link to={'/learn'}>Learn</Link>
		</nav>
	);
};

export default Nav;
