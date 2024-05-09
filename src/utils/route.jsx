import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import { Suspense, lazy } from 'react';

const Dashboard = lazy(() => import('../components/Dashboard/Dashboard'));
const Library = lazy(() => import('../components/Library/Library'));
const Learn = lazy(() => import('../components/Learn/Learn'));

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
		],
	},
]);
