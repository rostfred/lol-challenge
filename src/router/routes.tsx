import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Ability } from '../pages/Ability';
import { Home } from '../pages/Home';

export const MainRoutes = () => {
	const ScrollToTop = () => {
		const { pathname } = useLocation();

		useEffect(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}, [pathname]);
		return null;
	};

	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/ability' element={<Ability />} />
			</Routes>
		</>
	);
};
