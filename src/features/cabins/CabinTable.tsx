import { Table, TableBody, TableHead } from '../../ui/Table';
import { useCabins } from './hooks/useCabins';

import CabinRow from './CabinRow';
import Loader from '../../ui/Loader';

const cols = ['', 'Cabin', 'Capacity', 'Price', 'Discount', ''];

const CabinTable = () => {
	const { data: cabins, isLoading, isError } = useCabins();

	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		return <p>Error...</p>;
	}

	return (
		<Table cols={cols}>
			<TableHead />

			<TableBody>
				{cabins.map((cabin) => (
					<CabinRow key={cabin.id} cabin={cabin} />
				))}
			</TableBody>
		</Table>
	);
};

export default CabinTable;
