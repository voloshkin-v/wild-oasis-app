import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: InputProps) => {
	return <input {...props} className="rounded-md border px-3 py-2 shadow" />;
};

export default Input;
