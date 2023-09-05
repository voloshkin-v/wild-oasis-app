import { ReactNode } from 'react';

type TBodyProps = {
	children: ReactNode;
};

const TBody = ({ children }: TBodyProps) => {
	console.log('TBody renders!');

	return (
		<div role="rowgroup" className="rounded-es-lg rounded-ee-lg bg-white">
			{children}
		</div>
	);
};

export default TBody;
