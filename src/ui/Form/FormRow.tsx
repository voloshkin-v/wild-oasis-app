import { ReactNode } from 'react';

import ErrorMessage from './ErrorMessage';

type FormRowProps = {
	label: string;
	id: string;
	error: string | undefined;
	children: ReactNode;
};

const FormRow = ({ label, id, error, children }: FormRowProps) => {
	return (
		<div className="grid grid-cols-3 items-center gap-6 border-b border-gray-100 py-3">
			<label htmlFor={id}>{label}</label>

			{children}

			{error && <ErrorMessage message={error} />}
		</div>
	);
};

export default FormRow;
