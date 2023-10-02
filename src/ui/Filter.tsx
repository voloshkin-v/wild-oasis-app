import { useSearchParams } from 'react-router-dom';
import { Option } from '../types/option.type';

interface FilterProps {
	filterField: string;
	options: Option[];
}

const Filter = ({ filterField, options }: FilterProps) => {
	let [searchParams, setSearchParams] = useSearchParams();
	const currentFilter = searchParams.get(filterField) || options[0].value;

	const handleClick = (value: string) => {
		searchParams.set(filterField, value);
		setSearchParams(searchParams);
	};

	return (
		<div className="flex h-9 gap-1 rounded-sm bg-white p-1 shadow-sm">
			{options.map(({ label, value }) => (
				<button
					className={`rounded-sm border-none px-2 py-1 transition-colors hover:bg-indigo-600 hover:text-white ${
						value === currentFilter
							? 'bg-indigo-600 text-white'
							: ''
					}`}
					onClick={() => handleClick(value)}
					key={label}
					disabled={value === currentFilter}>
					{label}
				</button>
			))}
		</div>
	);
};

export default Filter;
