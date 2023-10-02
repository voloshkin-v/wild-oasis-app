import { createContext, useContext } from 'react';
import { MODALS } from './modal.constant';

export type ModalKeys = (typeof MODALS)[keyof typeof MODALS];

interface ModalContextType {
	modalName: ModalKeys | '';
	handleClose: () => void;
	handleOpen: (modalName: ModalKeys) => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error(
			'ModalContext was used outside of the ModalContext.Provider',
		);
	}

	return context;
};

export default ModalContext;
