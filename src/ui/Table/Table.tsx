import { ReactNode } from 'react';
import { createContext, useContext } from 'react';

type TableContextType = {
	cols: string[];
	customClass?: string;
} | null;

const TableContext = createContext<TableContextType>(null);

export const useTable = () => {
	const context = useContext(TableContext);

	if (context === null) {
		throw new Error(
			'TableContext was used outside of the TableContext.Provider.',
		);
	}

	return context;
};

type TableProps = {
	cols: string[];
	customClass?: string;
	children: ReactNode;
};

const Table = ({ cols, customClass, children }: TableProps) => {
	console.log('Table renders!');
	return (
		<TableContext.Provider
			value={{
				cols,
				customClass,
			}}>
			<div
				role="table"
				className="border-gray-200 rounded-lg border text-sm">
				{children}
			</div>
		</TableContext.Provider>
	);
};

export default Table;
