import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../services/cabins';

import CabinTable from '../features/cabins/CabinTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

const Cabins = () => {
	return (
		<>
			<Row>
				<Heading>All Cabins</Heading>
				<p>Filters/sort</p>
			</Row>

			<CabinTable />
		</>
	);
};

export default Cabins;
