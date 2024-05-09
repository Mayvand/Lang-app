import './App.css';
import { RouterProvider } from 'react-router-dom';
import { baseRouter } from './utils/route';
import { createContext, useState } from 'react';

export const libraryContext = createContext();

function App() {
	const [library, setLibrary] = useState(
		JSON.parse(localStorage.getItem('library')) || []
	);

	const [wordIndex, setWordIndex] = useState(0);

	return (
		<>
			<libraryContext.Provider
				value={{ library, setLibrary, wordIndex, setWordIndex }}
			>
				<RouterProvider router={baseRouter} />
			</libraryContext.Provider>
		</>
	);
}

export default App;
