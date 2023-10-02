import { createContext, useContext } from 'react';

export type MenuState = number | null;

interface MenusContextType {
	openId: MenuState;
	handleClose: () => void;
	handleOpen: (id: number) => void;
}

const MenusContext = createContext<MenusContextType | null>(null);

export const useMenus = () => {
	const context = useContext(MenusContext);

	if (!context) {
		throw new Error(
			'MenusContext was used outside the MenusContext.Provider',
		);
	}

	return context;
};

export default MenusContext;
