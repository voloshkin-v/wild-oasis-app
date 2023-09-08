import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTER_PATHS } from './routerPaths.constant';

import Dashboard from '../pages/Dashboard';
import Bookings from '../pages/Bookings';
import Cabins from '../pages/Cabins';
import Users from '../pages/Users';
import Settings from '../pages/Settings';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import AppLayout from '../router/AppLayout';
import ProtectedRoute from '../router/ProtectedRoute';

const Router = () => {
	const isLoggedIn = true;

	return (
		<Routes>
			<Route
				element={
					<ProtectedRoute isLoggedIn={isLoggedIn}>
						<AppLayout />
					</ProtectedRoute>
				}>
				<Route
					index
					element={
						<Navigate
							to={
								isLoggedIn
									? ROUTER_PATHS.DASHBOARD
									: ROUTER_PATHS.LOGIN
							}
							replace
						/>
					}
				/>
				<Route path={ROUTER_PATHS.DASHBOARD} element={<Dashboard />} />
				<Route path={ROUTER_PATHS.BOOKINGS} element={<Bookings />} />
				<Route path={ROUTER_PATHS.CABIBS} element={<Cabins />} />
				<Route path={ROUTER_PATHS.USERS} element={<Users />} />
				<Route path={ROUTER_PATHS.SETTINGS} element={<Settings />} />
			</Route>

			<Route path={ROUTER_PATHS.LOGIN} element={<Login />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export default Router;
