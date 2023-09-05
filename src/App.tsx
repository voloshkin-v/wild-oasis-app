import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FRONTEND_ROUTES } from './constants/frontend-routes.constants';
import { Toaster } from 'react-hot-toast';

import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import ProtectedRoute from './ui/ProtectedRoute';

const App = () => {
	const isLoggedIn = true;

	return (
		<>
			<BrowserRouter>
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
											? FRONTEND_ROUTES.DASHBOARD
											: FRONTEND_ROUTES.LOGIN
									}
									replace
								/>
							}
						/>
						<Route
							path={FRONTEND_ROUTES.DASHBOARD}
							element={<Dashboard />}
						/>
						<Route
							path={FRONTEND_ROUTES.BOOKINGS}
							element={<Bookings />}
						/>
						<Route
							path={FRONTEND_ROUTES.CABIBS}
							element={<Cabins />}
						/>
						<Route
							path={FRONTEND_ROUTES.USERS}
							element={<Users />}
						/>
						<Route
							path={FRONTEND_ROUTES.SETTINGS}
							element={<Settings />}
						/>
					</Route>

					<Route path={FRONTEND_ROUTES.LOGIN} element={<Login />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>

			<Toaster
				position="top-center"
				gutter={8}
				toastOptions={{
					success: {
						duration: 3000,
					},
					error: {
						duration: 5000,
					},
				}}
			/>
		</>
	);
};

export default App;
