import { useTable } from './Table';

const TableHead = () => {
	const { customClass, cols } = useTable();

	return (
		<div role="rowgroup">
			<div
				role="row"
				className={`grid items-center gap-6 rounded-lg bg-gray-50 px-6 py-4 font-semibold uppercase tracking-[0.4px] ${
					customClass || `grid-cols-${cols.length}`
				}`}>
				{cols.map((col, i) => (
					<div role="columnheader" key={i}>
						{col}
					</div>
				))}
			</div>
		</div>
	);
};

export default TableHead;
