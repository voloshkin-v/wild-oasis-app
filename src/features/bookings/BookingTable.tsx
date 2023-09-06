import { Table, TableBody, TableHead } from '../../ui/Table';

const cols = ['Cabin', 'Guest', 'Dates', 'Status', 'Amount', ''];

const BookingTable = () => {
	return (
		<Table cols={cols}>
			<TableHead />

			<TableBody>TABLE BODY.</TableBody>
		</Table>
	);
};

export default BookingTable;
