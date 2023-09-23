import { createContext, useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
import { Modals } from './modal.enum';

type Modal = Modals | '';

interface ModalContextType {
	modalName: Modal;
	handleClose: () => void;
	handleOpen: React.Dispatch<React.SetStateAction<Modal>>;
}

interface Props {
	children: React.ReactNode;
}

interface WindowProps extends Props {
	name: Modals;
}

interface OpenProps {
	opens: Modals;
	render: (callback: () => void) => React.ReactNode;
}

const ModalContext = createContext<ModalContextType | null>(null);

const useModal = () => {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error(
			'ModalContext was used outside of the ModalContext.Provider',
		);
	}

	return context;
};

const Modal = ({ children }: Props) => {
	const [modalName, setModalName] = useState<Modal>('');

	const handleClose = () => setModalName('');
	const handleOpen = setModalName;

	return (
		<ModalContext.Provider value={{ modalName, handleClose, handleOpen }}>
			{children}
		</ModalContext.Provider>
	);
};

const Open = ({ opens, render }: OpenProps) => {
	const { handleOpen } = useModal();

	return render(() => handleOpen(opens));
};

const Window = ({ children, name }: WindowProps) => {
	const { modalName, handleClose } = useModal();

	if (name !== modalName) return null;

	return createPortal(
		<div className="fixed left-0 top-0 h-full w-full overflow-y-auto overflow-x-hidden bg-gray-300">
			<div className="flex min-h-full items-center justify-center">
				<div className="relative m-5 max-w-3xl bg-white px-10 py-8">
					<button
						className="absolute right-5 top-5"
						onClick={handleClose}>
						<HiXMark />
					</button>

					{children}
				</div>
			</div>
		</div>,
		document.body,
	);
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
