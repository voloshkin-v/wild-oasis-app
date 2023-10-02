import { forwardRef } from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
	children: React.ReactNode;
}

interface RowProps {
	label: string;
	error?: string;
	children: React.ReactNode;
}

interface ErrorProps {
	message: string;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Form = ({ children, ...props }: FormProps) => {
	return (
		<form
			className="rounded-md border bg-white p-5 lg:px-10 lg:py-6"
			{...props}>
			{children}
		</form>
	);
};

const Row = ({ label, error, children }: RowProps) => {
	return (
		<div className="grid grid-cols-1 items-center gap-2 border-b py-3 first:pt-0 md:grid-cols-3 md:gap-6">
			<label className="flex items-center">{label}</label>

			{children}

			{error && <Form.Error message={error} />}
		</div>
	);
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ ...props },
	ref,
) {
	return (
		<input className="rounded-md px-3 py-2 shadow" {...props} ref={ref} />
	);
});

const Error = ({ message }: ErrorProps) => {
	return (
		<p className="text-xs font-normal text-red-700 md:text-sm">{message}</p>
	);
};

Form.Row = Row;
Form.Input = Input;
Form.Error = Error;

export default Form;
