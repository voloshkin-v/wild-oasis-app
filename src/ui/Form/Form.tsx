import { FormHTMLAttributes, ReactNode } from 'react';

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
	children: ReactNode;
};

const Form = ({ children, ...props }: FormProps) => {
	return (
		<form className="rounded-md border bg-white px-10 py-6" {...props}>
			{children}
		</form>
	);
};

const TT = () => {
	return <></>;
};

export default Form;
