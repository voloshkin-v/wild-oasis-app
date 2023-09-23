import TableContext, { useTable } from './TableContext';
import { Cabin } from '../../types/cabin.types';

interface Props {
	children: React.ReactNode;
}

interface TableProps extends Props {
	cols: string[];
	customClass?: string;
}

const Table = ({ cols, customClass, children }: TableProps) => {
	return (
		<TableContext.Provider value={{ cols, customClass }}>
			<div role="table" className="rounded-lg border">
				{children}
			</div>
		</TableContext.Provider>
	);
};

const Header = () => {
	const { cols, customClass } = useTable();

	return (
		<div role="rowgroup">
			<div
				role="row"
				className={`grid items-center gap-6 rounded-lg border-b bg-white px-6 py-4 font-semibold uppercase tracking-[0.4px] text-gray-600 ${
					customClass || ''
				}`}
				style={
					!customClass
						? { gridTemplateColumns: `repeat(${cols.length}, 1fr)` }
						: {}
				}>
				{cols.map((col, i) => (
					<span key={i} role="columnheader">
						{col}
					</span>
				))}
			</div>
		</div>
	);
};

const Row = ({ children }: Props) => {
	const { cols, customClass } = useTable();

	return (
		<div
			role="row"
			className={`grid items-center gap-6 border-t px-6 py-3 first:border-t-0 ${
				customClass || ''
			}`}
			style={
				!customClass
					? { gridTemplateColumns: `repeat(${cols.length}, 1fr)` }
					: {}
			}>
			{children}
		</div>
	);
};

interface BodyProps<T> {
	data: T[];
	render: (callback: T) => React.ReactNode;
}

const Body = <T,>({ data, render }: BodyProps<T>) => {
	return (
		<div role="rowgroup" className="rounded-ee-lg rounded-es-lg bg-white">
			{data.map(render)}
		</div>
	);
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
