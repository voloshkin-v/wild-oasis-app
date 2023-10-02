import { useSearchParams } from 'react-router-dom';
import { Option } from '../types/option.type';
import Select from './Select';

interface SortByProps {
	options: Option[];
}

const SortBy = ({ options }: SortByProps) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const selectedSortBy = searchParams.get('sortBy') || options[0].value;

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		searchParams.set('sortBy', e.target.value);
		setSearchParams(searchParams);
	};

	return (
		<Select
			value={selectedSortBy}
			options={options}
			onChange={handleChange}
		/>
	);
};

export default SortBy;
