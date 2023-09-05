import { ReactNode } from 'react';

type RowProps = {
	children: ReactNode;
};

const Row = ({ children }: RowProps) => {
	return <div className="flex items-center justify-between">{children}</div>;
};

export default Row;
