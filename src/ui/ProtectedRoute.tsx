import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { FRONTEND_ROUTES } from '../common/constants/frontend-routes.constants';

type ProtectedRoute = {
	isLoggedIn: boolean;
	children: ReactNode;
};

const ProtectedRoute = ({ isLoggedIn, children }: ProtectedRoute) => {
	if (!isLoggedIn) {
		return <Navigate to={FRONTEND_ROUTES.LOGIN} />;
	}

	return children;
};

export default ProtectedRoute;
