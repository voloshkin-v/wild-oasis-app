import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabin } from '../../services/cabins';
import { Row } from '../../types/supabase.helper';
import { useTable } from '../../ui/Table/Table';

import { toast } from 'react-hot-toast';

type CabinRowProps = {
	cabin: Row<'cabins'>;
};

const CabinRow = ({ cabin }: CabinRowProps) => {
	const queryClient = useQueryClient();
	const { customClass, cols } = useTable();

	const { mutate } = useMutation({
		mutationFn: deleteCabin,
		onSuccess: () => {
			toast.success('Cabin successfully deleted');

			queryClient.invalidateQueries({
				queryKey: ['cabins'],
			});
		},
		onError: (error) => {
			if (error instanceof Error) {
				toast.error(error.message);
			}
		},
	});

	const { image, discount, name, maxCapacity, regularPrice, id } = cabin;

	return (
		<div
			role="row"
			className={`grid items-center gap-6 ${
				customClass || `grid-cols-${cols.length}`
			}`}>
			<div role="cell">
				{image && <img src={image} alt={name || 'Cabin image'} />}
			</div>

			<div role="cell">{name}</div>
			<div role="cell">Fits up up {maxCapacity} guests</div>
			<div role="cell">${regularPrice}</div>
			<div role="cell">${discount}</div>
			<button onClick={() => mutate(id)}>Delete</button>
		</div>
	);
};

export default CabinRow;
