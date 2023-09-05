import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';

const AppLayout = () => {
	return (
		<div className="flex min-h-screen">
			<Sidebar />

			<main className="block w-full bg-gray-50">
				<Header />

				<div className="ml-auto mr-auto flex max-w-7xl flex-1 flex-col gap-y-8 p-6 lg:p-12">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default AppLayout;
