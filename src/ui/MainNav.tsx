import { NavLink } from 'react-router-dom';
import {
	HiOutlineHome,
	HiOutlineCalendarDays,
	HiOutlineHomeModern,
	HiOutlineUsers,
	HiOutlineCog6Tooth,
} from 'react-icons/hi2';
import { FRONTEND_ROUTES } from '../constants/frontend-routes.constants';

const navigation = [
	{
		path: FRONTEND_ROUTES.DASHBOARD,
		title: 'Home',
		icon: <HiOutlineHome />,
	},
	{
		path: FRONTEND_ROUTES.BOOKINGS,
		title: 'Bookings',
		icon: <HiOutlineCalendarDays />,
	},
	{
		path: FRONTEND_ROUTES.CABIBS,
		title: 'Cabins',
		icon: <HiOutlineHomeModern />,
	},
	{
		path: FRONTEND_ROUTES.USERS,
		title: 'Users',
		icon: <HiOutlineUsers />,
	},
	{
		path: FRONTEND_ROUTES.SETTINGS,
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
						className={`flex items-center gap-x-3 rounded p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-800 lg:px-6 lg:py-3`}>
						{icon}
						<span className="hidden lg:block">{title}</span>
					</NavLink>
				))}
			</ul>
		</nav>
	);
};

export default MainNav;
