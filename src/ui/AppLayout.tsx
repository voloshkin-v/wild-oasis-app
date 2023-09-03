import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';

const AppLayout = () => {
	return (
		<div className="flex min-h-screen">
			<Sidebar />

			<main className="flex flex-1 flex-col">
				<Header />

				<div className="flex-1 bg-gray-50 p-6 lg:p-12">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default AppLayout;
