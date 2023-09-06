import { ReactNode } from 'react';

type TableBodyProps = {
	children: ReactNode;
};

const TableBody = ({ children }: TableBodyProps) => {
	return (
		<div role="rowgroup" className="rounded-ee-lg rounded-es-lg bg-white">
			{children}
		</div>
	);
};

export default TableBody;
