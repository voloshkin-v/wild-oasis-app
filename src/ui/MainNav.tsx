import { NavLink } from 'react-router-dom';
import {
	HiOutlineHome,
	HiOutlineCalendarDays,
	HiOutlineHomeModern,
	HiOutlineUsers,
	HiOutlineCog6Tooth,
} from 'react-icons/hi2';
import { ROUTER_PATHS } from '../router/routerPaths.constant';

const navigation = [
	{
		path: ROUTER_PATHS.DASHBOARD,
		title: 'Home',
		icon: <HiOutlineHome />,
	},
	{
		path: ROUTER_PATHS.BOOKINGS,
		title: 'Bookings',
		icon: <HiOutlineCalendarDays />,
	},
	{
		path: ROUTER_PATHS.CABIBS,
		title: 'Cabins',
		icon: <HiOutlineHomeModern />,
	},
	{
		path: ROUTER_PATHS.USERS,
		title: 'Users',
		icon: <HiOutlineUsers />,
	},
	{
		path: ROUTER_PATHS.SETTINGS,
		title: 'Settings',
		icon: <HiOutlineCog6Tooth />,
	},
];

const MainNav = () => {
	return (
		<nav>
			<ul className="flex flex-col gap-y-2">
				{navigation.map(({ path, title, icon }, index) => (
					<NavLink
						to={path}
						key={index}
						className={({ isActive }) => {
							return `flex items-center gap-x-3 rounded p-2 text-gray-600 transition-colors hover:bg-gray-50 hover:text-indigo-600 lg:px-6 lg:py-3 ${
								isActive ? 'bg-gray-50 text-indigo-600' : ''
							}`;
						}}>
						{icon}
						<span className="hidden lg:block">{title}</span>
					</NavLink>
				))}
			</ul>
		</nav>
	);
};

export default MainNav;
