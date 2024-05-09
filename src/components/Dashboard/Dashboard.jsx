import React from 'react';
import style from './Dashboard.module.css';
import PlayButton from '../../assets/img/play.svg';

const Dashboard = () => {
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
				<h3>238 points</h3>
			</div>
			<div className={style.levelBlock}>
				<span>level</span>
				<h3>7 level</h3>
				<p>Learn 750 new words in one course</p>
				<div className={style.levelBackground}></div>
			</div>
		</section>
	);
};

export default Dashboard;
