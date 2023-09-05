import Logo from './Logo';
import MainNav from './MainNav';

const Sidebar = () => {
	return (
		<aside className="flex h-auto min-h-full w-auto flex-col gap-y-8 border-r bg-white p-2 lg:min-w-[260px] lg:px-6 lg:py-8">
			<Logo />
			<MainNav />
		</aside>
	);
};

export default Sidebar;
