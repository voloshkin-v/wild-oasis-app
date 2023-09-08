import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCabin as deleteCabinApi } from '../../../services/cabins';

export const useDeleteCabin = () => {
	const queryClient = useQueryClient();

	const { mutate: deleteCabin, isLoading: isDeleting } = useMutation({
		mutationFn: deleteCabinApi,
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

	return { deleteCabin, isDeleting };
};
