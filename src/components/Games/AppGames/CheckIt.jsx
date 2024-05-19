import React, { useContext, useEffect, useMemo, useState } from 'react';
import style from './AppGames.module.css';
import { libraryContext } from '../../../App';
import { Link } from 'react-router-dom';

const CheckIt = () => {
	const {
		library,
		wordIndex,
		playWords,
		setWordIndex,
		errorWords,
		setErrorWords,
		correctWords,
		setCorrectWords,
		points,
	} = useContext(libraryContext);

	const progressBarWidth = {
		width: `${(100 / library.slice(-10).length) * (wordIndex + 1)}vw`,
	};

	const randomWords = useMemo(
		() => playWords.sort(() => Math.random() - 0.5),
		[]
	);

	const [currentWords, setCurrentWords] = useState([
		'random',
		'correct',
		'random',
	]);

	useEffect(() => {
		setCurrentWords(
			[
				randomWords[wordIndex].word,
				randomWords[(wordIndex + 1) % randomWords.length].word,
				randomWords[(wordIndex + 2) % randomWords.length].word,
			].sort(() => Math.random() - 0.5)
		);
	}, [correctWords]);

	const speak = word => {
		const speakInstance = new SpeechSynthesisUtterance(word);
		speakInstance.voice = speechSynthesis.getVoices()[4];
		speechSynthesis.speak(speakInstance);
	};

	const CheckWord = word => {
		if (word === randomWords[wordIndex].word) {
			speak(randomWords[wordIndex].translate);
			setCorrectWords(correctWords + 1);
			if (wordIndex !== playWords.length - 1) {
				setWordIndex(wordIndex + 1);
			} else {
				alert('Game is over');
			}
		} else {
			setErrorWords(errorWords + 1);
		}
	};

	return (
		<>
			<div className={style.progressBarContainer}>
				<div className={style.progressBar} style={progressBarWidth}></div>
			</div>
			<div className={style.gameBlockHeader}>
				<Link className={style.btnBack} to={'/games'}></Link>
				<nav className={style.gameNav}>
					<ul className={style.results}>
						<li>Errors: {errorWords}</li>
						<li>Correct: {correctWords}</li>
						<li>Points: {points}</li>
					</ul>
				</nav>
			</div>
			<section>
				<span>Write a translation for this word</span>
				<h3>{randomWords[wordIndex].translate}</h3>
				<ul className={style.btnContainer}>
					{currentWords.map((word, index) => (
						<li
							onClick={() => CheckWord(word)}
							key={index}
							className={style.btnCheck}
						>
							{word}
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default CheckIt;
