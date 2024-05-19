import React, { useContext } from 'react';
import style from './Dashboard.module.css';
import PlayButton from '../../assets/img/play.svg';
import { libraryContext } from '../../App';

const Dashboard = () => {
	const { points } = useContext(libraryContext);
	return (
		<section className={style.dashboardContainer}>
			<div className={style.gameBlock}>
				<p>
					The most popular game is <br />
					<b>Speak IT</b>
				</p>
				<img className={style.btnPlay} src={PlayButton} alt='' />
				<button className={style.btnRandom}>Play random game</button>
			</div>
			<div className={style.pointsBlock}>
				<span>Common experience</span>
				<h3>{points} points</h3>
			</div>
			<div className={style.levelBlock}>
				<span>level</span>
				<h3>{(0.2 * Math.sqrt(points)).toFixed()} level</h3>
				<p>Learn 750 new words in one course</p>
				<div className={style.levelBackground}></div>
			</div>
		</section>
	);
};

export default Dashboard;
