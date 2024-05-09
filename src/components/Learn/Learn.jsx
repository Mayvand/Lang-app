import React, { useContext, useEffect } from 'react';
import style from './Learn.module.css';
import { libraryContext } from '../../App';

const Learn = () => {
	const { library, wordIndex, setWordIndex } = useContext(libraryContext);

	const progressBarWidth = {
		width: `${(100 / library.slice(-10).length) * (wordIndex + 1)}vw`,
	};

	const speak = word => {
		const speakInstance = new SpeechSynthesisUtterance(word);
		speakInstance.voice = speechSynthesis.getVoices()[4];
		speechSynthesis.speak(speakInstance);
	};

	useEffect(() => {
		speak(library[wordIndex].translate);
		console.log(wordIndex);
	}, [wordIndex]);

	return (
		<>
			<div className={style.progressBarContainer}>
				<div className={style.progressBar} style={progressBarWidth}></div>
			</div>
			<section style={{ textAlign: 'center' }}>
				<span>{library[wordIndex].word}</span>
				<h3>{library[wordIndex].translate}</h3>
			</section>
			<div
				onClick={() => {
					if (wordIndex === library.length - 1) {
						setWordIndex(0);
					} else {
						setWordIndex(wordIndex + 1);
					}
				}}
				className={style.btnNext}
			></div>
		</>
	);
};

export default Learn;
