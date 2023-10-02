import { Option } from '../types/option.type';

interface SelectProps {
	options: Option[];
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, value, onChange }: SelectProps) => {
	return (
		<select
			value={value}
			onChange={onChange}
			className="h-9 cursor-pointer rounded-sm border-r-[10px] border-transparent px-3 py-2 pr-4 shadow-sm">
			{options.map(({ label, value }) => (
				<option value={value} key={value}>
					{label}
				</option>
			))}
		</select>
	);
};

export default Select;
