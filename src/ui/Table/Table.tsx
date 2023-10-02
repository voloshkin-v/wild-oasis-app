import TableContext, { useTable } from './TableContext';

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
			<div
				role="table"
				className="overflow-x-auto2 block whitespace-nowrap">
				{children}
			</div>
		</TableContext.Provider>
	);
};

const Header = () => {
	const { cols, customClass } = useTable();

	return (
		<div role="rowgroup" className="min-w-[650px]">
			<div
				role="row"
				className={`grid items-center gap-6 rounded-t-md border bg-white px-6 py-4 font-semibold uppercase tracking-[0.4px] text-gray-600 ${
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
			className={`grid items-center gap-6 border-t px-6 py-3 font-normal first:border-t-0 ${
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
		<div
			role="rowgroup"
			className="min-w-[650px] rounded-b-sm border border-t-0 bg-white first:rounded-t-md first:border-t">
			{!data.length ? (
				<p className="px-6 py-4 text-center">
					No data to show at the moment
				</p>
			) : (
				data.map(render)
			)}
		</div>
	);
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
