import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';
import { Option } from '../../types/option.type';
import Row from '../../ui/Row';

const filterOptions: Option[] = [
	{
		label: 'All',
		value: 'all',
	},
	{
		label: 'No discount',
		value: 'no-discount',
	},
	{
		label: 'With discount',
		value: 'with-discount',
	},
];

const sortByOptions = [
	{
		label: 'Sort by name (A-Z)',
		value: 'name-asc',
	},
	{
		label: 'Sort by name (Z-A)',
		value: 'name-desc',
	},
	{
		label: 'Sort by price (low first)',
		value: 'regularPrice-asc',
	},
	{
		label: 'Sort by price (high first)',
		value: 'regularPrice-desc',
	},
	{
		label: 'Sort by capacity (low first)',
		value: 'maxCapacity-asc',
	},
	{
		label: 'Sort by capacity (high first)',
		value: 'maxCapacity-desc',
	},
];

const CabinTableOperations = () => {
	return (
		<Row>
			<Filter filterField="discount" options={filterOptions} />
			<SortBy options={sortByOptions} />
		</Row>
	);
};

export default CabinTableOperations;
