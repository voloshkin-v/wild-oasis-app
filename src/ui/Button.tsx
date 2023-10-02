type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	style?: 'secondary';
	children: React.ReactNode;
};

const Button = ({ style, children, ...props }: ButtonProps) => {
	let baseClasses =
		'border-0 w-fit rounded px-4 py-3 font-medium shadow transition';

	switch (style) {
		case 'secondary':
			baseClasses += ' bg-white text-gray-600 hover:bg-gray-50';
			break;

		default:
			baseClasses += ' bg-indigo-600 text-indigo-50 hover:bg-indigo-700';
	}

	if (props.disabled) {
		baseClasses += ' cursor-not-allowed';
	}

	return (
		<button className={baseClasses} {...props}>
			{children}
		</button>
	);
};

export default Button;
