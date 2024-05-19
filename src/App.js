import './App.css';
import { RouterProvider } from 'react-router-dom';
import { baseRouter } from './utils/route';
import { createContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export const libraryContext = createContext();

function App() {
	const [library, setLibrary] = useState(
		JSON.parse(localStorage.getItem('library')) || []
	);

	const [cookie, setCookie] = useCookies(['points']);

	const [wordIndex, setWordIndex] = useState(0);
	const [playWords, setPlayWords] = useState(library.slice(-10));
	const [correctWords, setCorrectWords] = useState(0);
	const [errorWords, setErrorWords] = useState(0);
	const [points, setPoints] = useState(+cookie.points || 0);

	useEffect(() => {
		if (correctWords) {
			setPoints(points + 1);
			setCookie('points', points + 1);
		}
	}, [correctWords]);

	return (
		<>
			<libraryContext.Provider
				value={{
					library,
					setLibrary,
					wordIndex,
					setWordIndex,
					playWords,
					setPlayWords,
					errorWords,
					setErrorWords,
					correctWords,
					setCorrectWords,
					points,
				}}
			>
				<RouterProvider router={baseRouter} />
			</libraryContext.Provider>
		</>
	);
}

export default App;
