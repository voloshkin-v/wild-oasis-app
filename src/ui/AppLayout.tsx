import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';

const AppLayout = () => {
	return (
		<div className="flex">
			<Sidebar />

			<Header />
			<main className="ml-10">
				<Outlet />
			</main>
		</div>
	);
};

export default AppLayout;
