import Row from '../ui/Row';
import Heading from '../ui/Heading';
import BookingTable from '../features/bookings/BookingTable';
import { useDeleteCabin } from '../features/cabins/hooks/useDeleteCabin';

const Bookings = () => {
	return (
		<>
			<Row>
				<Heading>All Bookings</Heading>
				<p>Filters/sort</p>
			</Row>

			<BookingTable />
		</>
	);
};

export default Bookings;
