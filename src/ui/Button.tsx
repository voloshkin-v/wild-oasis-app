import { ReactNode } from 'react';

type ButtonProps = {
	onClick?: () => void;
	style?: 'secondary';
	type?: 'button' | 'reset' | 'submit';
	isLoading?: boolean;
	children: ReactNode;
};

const Button = ({
	onClick,
	style = '',
	type = 'button',
	isLoading = false,
	children,
}: ButtonProps) => {
	let baseClasses =
		'border-0 w-fit rounded px-4 py-3 font-medium shadow transition';

	switch (style) {
		case 'secondary':
			baseClasses +=
				' bg-white text-gray-600 border-color-red hover:bg-gray-50';
			break;

		default:
			baseClasses += ' bg-indigo-600 text-indigo-50 hover:bg-indigo-700';
	}

	if (isLoading) {
		baseClasses += ' cursor-not-allowed';
	}

	return (
		<button
			type={type}
			className={baseClasses}
			disabled={isLoading}
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
