import React, { useContext, useRef, useState } from 'react';
import style from './AppGames.module.css';
import { libraryContext } from '../../../App';
import { Link } from 'react-router-dom';

const WriteIt = () => {
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

	const input = useRef();

	const [randomWords, setRandomWords] = useState(
		playWords.sort(() => Math.random() - 0.5)
	);

	const speak = word => {
		const speakInstance = new SpeechSynthesisUtterance(word);
		speakInstance.voice = speechSynthesis.getVoices()[4];
		speechSynthesis.speak(speakInstance);
	};

	const CheckWord = event => {
		event.preventDefault();
		if (input.current.value === randomWords[wordIndex].translate) {
			speak(randomWords[wordIndex].translate);
			setCorrectWords(correctWords + 1);
			if (wordIndex !== playWords.length - 1) {
				setWordIndex(wordIndex + 1);
			} else {
				alert('Game is over');
			}

			input.current.value = '';
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
				<h3>{randomWords[wordIndex].word}</h3>
				<form onSubmit={CheckWord} className={style.writeWordBlock}>
					<input ref={input} type='text' />
					<button className={style.btnOk}>OK</button>
				</form>
			</section>
		</>
	);
};

export default WriteIt;
