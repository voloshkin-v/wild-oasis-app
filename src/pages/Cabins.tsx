import CabinTable from '../features/cabins/CabinTable';
import AddCabin from '../features/cabins/AddCabin';
import Row from '../ui/Row';
import Heading from '../ui/Heading';

const Cabins = () => {
	return (
		<>
			<Row>
				<Heading>All Cabins</Heading>
				<p>Filters/sort</p>
			</Row>

			<CabinTable />
			<AddCabin />
		</>
	);
};

export default Cabins;
