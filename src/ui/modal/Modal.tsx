import { useState, cloneElement, Children, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
import ModalContext, { ModalKeys, useModal } from './ModalContext';
import { useOutsideClick } from '../../hooks/useOutsideClick';

interface Props {
	children: React.ReactNode;
}

interface WindowProps extends Props {
	name: ModalKeys;
}

interface OpenProps {
	children: JSX.Element;
	opens: ModalKeys;
}

const Modal = ({ children }: Props) => {
	const [modalName, setModalName] = useState<ModalKeys | ''>('');

	const handleClose = () => setModalName('');
	const handleOpen = setModalName;

	return (
		<ModalContext.Provider value={{ modalName, handleClose, handleOpen }}>
			{children}
		</ModalContext.Provider>
	);
};

const Open = ({ opens, children }: OpenProps) => {
	const { handleOpen } = useModal();

	return Children.map(children, (child) => {
		return cloneElement(child as React.ReactElement, {
			onClick: () => handleOpen(opens),
		});
	});
};

const Window = ({ children, name }: WindowProps) => {
	const { modalName, handleClose } = useModal();
	const ref = useOutsideClick<HTMLDivElement>(handleClose);

	useEffect(() => {
		if (name === modalName) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [name, modalName]);

	if (name !== modalName) return null;

	return createPortal(
		<div className="fixed left-0 top-0 h-full w-full overflow-y-auto overflow-x-hidden bg-black/75">
			<div className="flex min-h-full items-center justify-center">
				<div
					className="relative m-5 max-w-3xl rounded-lg bg-white px-10 py-8 shadow"
					ref={ref}>
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
