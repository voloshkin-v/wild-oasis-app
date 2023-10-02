import { useState } from 'react';
import { HiEllipsisVertical } from 'react-icons/hi2';
import MenusContext, { MenuState, useMenus } from './MenusContext';

interface Props {
	children: React.ReactNode;
}

interface ToggleProps {
	id: number;
}

interface ListProps extends Props {
	id: number;
}

const Menus = ({ children }: Props) => {
	const [openId, setOpenId] = useState<MenuState>(null);

	const handleClose = () => setOpenId(null);
	const handleOpen = setOpenId;

	return (
		<MenusContext.Provider value={{ openId, handleOpen, handleClose }}>
			{children}
		</MenusContext.Provider>
	);
};

const Menu = ({ children }: Props) => {
	return children;
};

const Toggle = ({ id }: ToggleProps) => {
	const { openId, handleOpen, handleClose } = useMenus();

	const handleClick = () => {
		openId === id ? handleClose() : handleOpen(id);
	};

	return (
		<button onClick={handleClick} className="ml-auto flex">
			<HiEllipsisVertical />
		</button>
	);
};

const List = ({ id, children }: ListProps) => {
	const { openId } = useMenus();

	return openId === id && <ul>{children}</ul>;
};

const Button = ({ children }: Props) => {
	return (
		<li>
			<button>{children}</button>
		</li>
	);
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
