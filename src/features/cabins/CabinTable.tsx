import { useCabins } from './hooks/useCabins';

import CabinRow from './CabinRow';
import Loader from '../../ui/Loader';
import Table from '../../ui/table/Table';
import { Cabin } from '../../types/cabin.types';

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
		<>
			<Table cols={cols}>
				<Table.Header />
				<Table.Body
					data={cabins}
					render={(cabin) => (
						<CabinRow key={cabin.id} cabin={cabin} />
					)}
				/>
			</Table>
		</>
	);
};

export default CabinTable;
