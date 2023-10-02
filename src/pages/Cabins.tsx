import CabinTable from '../features/cabins/CabinTable';
import AddCabin from '../features/cabins/AddCabin';
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import CabinTableOperations from '../features/cabins/CabinTableOperations';

const Cabins = () => {
	return (
		<>
			<Row>
				<Heading>All Cabins</Heading>
				<CabinTableOperations />
			</Row>

			<CabinTable />
			<AddCabin />
		</>
	);
};

export default Cabins;
