import { useState } from 'react';

import CabinTable from '../features/cabins/CabinTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CreateCabinForm from '../features/cabins/CreateCabinForm';
import Button from '../ui/Button';

const Cabins = () => {
	const [showForm, setShowForm] = useState(false);

	return (
		<>
			<Row>
				<Heading>All Cabins</Heading>
				<p>Filters/sort</p>
			</Row>

			<CabinTable />

			<Button onClick={() => setShowForm((show) => !show)}>
				Add new cabin
			</Button>

			{showForm && <CreateCabinForm />}
		</>
	);
};

export default Cabins;
