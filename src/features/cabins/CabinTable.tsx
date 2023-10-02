import { useSearchParams } from 'react-router-dom';
import { useCabins } from './hooks/useCabins';

import CabinRow from './CabinRow';
import Loader from '../../ui/Loader';
import Table from '../../ui/table/Table';

const cols = ['', 'Cabin', 'Capacity', 'Price', 'Discount', ''];

const CabinTable = () => {
	const { data: cabins, isLoading, isError } = useCabins();
	const [searchParams] = useSearchParams();

	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		return <p>Error...</p>;
	}

	// Filter
	const filterValue = searchParams.get('discount');
	let filteredCabins = cabins;

	if (filterValue === 'with-discount') {
		filteredCabins = cabins.filter((cabin) => cabin.discount);
	}

	if (filterValue === 'no-discount') {
		filteredCabins = cabins.filter((cabin) => !cabin.discount);
	}

	// Sort
	const sortValue = searchParams.get('sortBy') || 'name-asc';
	const [field, direction] = sortValue.split('-');
	const modifier = direction === 'asc' ? 1 : -1;

	const sortedCabins = filteredCabins.sort(
		(a, b) => (a[field] - b[field]) * modifier,
	);

	return (
		<Table cols={cols} customClass="grid-cols-[1fr_1fr_2fr_1fr_1fr_0.5fr]">
			<Table.Header />
			<Table.Body
				data={sortedCabins}
				render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
			/>
		</Table>
	);
};

export default CabinTable;
