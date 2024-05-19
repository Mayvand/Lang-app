import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import { Suspense, lazy } from 'react';

const Dashboard = lazy(() => import('../components/Dashboard/Dashboard'));
const Library = lazy(() => import('../components/Library/Library'));
const Learn = lazy(() => import('../components/Learn/Learn'));
const Games = lazy(() => import('../components/Games/Games'));
const WriteIt = lazy(() => import('../components/Games/AppGames/WriteIt'));
const CheckIt = lazy(() => import('../components/Games/AppGames/CheckIt'));

export const baseRouter = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Dashboard />
					</Suspense>
				),
			},
			{
				path: '/library',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Library />
					</Suspense>
				),
			},
			{
				path: '/learn',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Learn />
					</Suspense>
				),
			},
			{
				path: '/games',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Games />
					</Suspense>
				),
			},
			{
				path: '/game/write-it',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<WriteIt />
					</Suspense>
				),
			},
			{
				path: '/game/check-it',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<CheckIt />
					</Suspense>
				),
			},
		],
	},
]);
