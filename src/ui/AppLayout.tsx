import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';

const AppLayout = () => {
	return (
		<div className="flex min-h-screen">
			<Sidebar />

			<main className="block w-full bg-gray-50">
				<Header />

				<div className="no-scrollbar ml-auto mr-auto flex h-[calc(100vh-48px)] max-w-7xl flex-1 flex-col gap-y-8 overflow-y-auto p-6 lg:p-12">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default AppLayout;
