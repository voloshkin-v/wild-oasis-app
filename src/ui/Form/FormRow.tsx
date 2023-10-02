import ErrorMessage from './ErrorMessage';

type FormRowProps = {
	label: string;
	error?: string | undefined;
	children: React.ReactNode;
};

const FormRow = ({ label, error, children }: FormRowProps) => {
	return (
		<div className="grid grid-cols-3 items-center gap-6 border-b py-3 first:pt-0">
			<label className="flex items-center">{label}</label>

			{children}

			{error && <ErrorMessage message={error} />}
		</div>
	);
};

export default FormRow;
