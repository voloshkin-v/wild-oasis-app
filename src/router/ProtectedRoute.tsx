import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTER_PATHS } from './routerPaths.constant';

type ProtectedRoute = {
	isLoggedIn: boolean;
	children: ReactNode;
};

const ProtectedRoute = ({ isLoggedIn, children }: ProtectedRoute) => {
	if (!isLoggedIn) {
		return <Navigate to={ROUTER_PATHS.LOGIN} />;
	}

	return children;
};

export default ProtectedRoute;
