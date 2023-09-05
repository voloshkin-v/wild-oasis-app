import { useTable } from './Table';

const THead = () => {
	const { customClass, cols } = useTable();
	console.log('THead renders!');

	return (
		<div role="rowgroup">
			<div
				role="row"
				className={`rounded-lg border-gray-200 grid items-center gap-6 border-b bg-gray-50 px-6 py-4 font-semibold uppercase tracking-[0.4px] ${
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

export default THead;
