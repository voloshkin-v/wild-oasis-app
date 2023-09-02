import { Link } from 'react-router-dom';
import { FRONTEND_ROUTES } from '../common/constants/frontend-routes.constants';

const navigation = [
	{
		path: FRONTEND_ROUTES.DASHBOARD,
		title: 'Home',
	},
	{
		path: FRONTEND_ROUTES.BOOKINGS,
		title: 'Bookings',
	},
	{
		path: FRONTEND_ROUTES.CABIBS,
		title: 'Cabins',
	},
	{
		path: FRONTEND_ROUTES.USERS,
		title: 'Users',
	},
	{
		path: FRONTEND_ROUTES.SETTINGS,
		title: 'Settings',
	},
];

const Sidebar = () => {
	return (
		<aside>
			<nav>
				<ul>
					{navigation.map(({ path, title }, index) => (
						<Link to={path} key={index}>
							{title}
						</Link>
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
