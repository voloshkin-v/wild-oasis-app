type RowProps = {
	children: React.ReactNode;
};

const Row = ({ children }: RowProps) => {
	return (
		<div className="flex flex-wrap items-center justify-between gap-4">
			{children}
		</div>
	);
};

export default Row;
