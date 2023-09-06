import { ReactNode } from 'react';

type TBodyProps = {
	children: ReactNode;
};

const TBody = ({ children }: TBodyProps) => {
	return (
		<div role="rowgroup" className="rounded-ee-lg rounded-es-lg bg-white">
			{children}
		</div>
	);
};

export default TBody;
