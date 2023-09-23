import { createContext, useContext } from 'react';

interface TableContextType {
	cols: string[];
	customClass?: string;
}

const TableContext = createContext<TableContextType | null>(null);

export const useTable = () => {
	const context = useContext(TableContext);

	if (!context) {
		throw new Error(
			'TableContext was used outside the TableContext.Provider',
		);
	}

	return context;
};

export default TableContext;
