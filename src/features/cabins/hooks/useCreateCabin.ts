import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createCabin as createCabinApi } from '../../../services/cabins';

export const useCreateCabin = () => {
	const queryClient = useQueryClient();

	const { mutate: createCabin, isLoading: isCreating } = useMutation({
		mutationFn: createCabinApi,
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

	return { createCabin, isCreating };
};
