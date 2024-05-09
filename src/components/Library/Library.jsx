import React, { useContext, useRef } from 'react';
import style from './Library.module.css';
import addBtn from './../../assets/img/add.svg';
import deleteBtn from './../../assets/img/delete.svg';
import { libraryContext } from '../../App';

const Library = () => {
	const { library, setLibrary } = useContext(libraryContext);

	const inputValue = useRef();

	const deleteWord = id => {
		const updateLibrary = library.filter((word, index) => index !== id);
		setLibrary(updateLibrary);
		localStorage.setItem('library', JSON.stringify(updateLibrary));
	};

	const addNewWord = async event => {
		event.preventDefault();
		const response = await fetch(
			`https://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${inputValue.current.value}`
		);
		const translation = await response.json();
		const updateLibrary = [
			...library,
			{
				word: translation.word,
				translate: translation.translate,
				learn: 0,
			},
		];
		setLibrary(updateLibrary);
		localStorage.setItem('library', JSON.stringify(updateLibrary));
		inputValue.current.value = '';
	};

	return (
		<section className={style.libraryBlock}>
			<span>
				Add new <b>Word</b>
			</span>
			<form onSubmit={addNewWord} className={style.addWordBlock}>
				<input ref={inputValue} type='text' />
				<button>
					<img src={addBtn} alt='' />
				</button>
			</form>
			<div className={style.wordsTable}>
				<ul>
					<li>
						<h3>Word</h3>
					</li>
					<li>
						<h3>Translation</h3>
					</li>
					<li>
						<h3>Learn</h3>
					</li>
				</ul>
				{library.map((word, index) => (
					<ul key={index}>
						<li>{word.word}</li>
						<li>{word.translate}</li>
						<li>{word.learn}</li>
						<div className={style.settings}>
							<button onClick={() => deleteWord(index)}>
								<img src={deleteBtn} alt='delete' />
							</button>
						</div>
					</ul>
				))}
			</div>
		</section>
	);
};

export default Library;
