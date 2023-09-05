import { Table, TBody, THead } from '../../ui/Table';

const cols = ['Cabin', 'Guest', 'Dates', 'Status', 'Amount', ''];

const BookingTable = () => {
	return (
		<Table cols={cols}>
			<THead />

			<TBody>TABLE BODY.</TBody>
		</Table>
	);
};

export default BookingTable;
