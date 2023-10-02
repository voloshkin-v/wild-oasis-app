type RowButtonsProps = {
	children: React.ReactNode;
};

const RowButtons = ({ children }: RowButtonsProps) => {
	return (
		<div className="flex items-center justify-end gap-3 pt-3">
			{children}
		</div>
	);
};

export default RowButtons;
