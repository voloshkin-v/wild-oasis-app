import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSettings as updateSettingsApi } from '../../../services/settings';
import toast from 'react-hot-toast';

export const useUpdateSettings = () => {
	const queryClient = useQueryClient();

	const { isLoading: isUpdating, mutate: updateSettings } = useMutation({
		mutationFn: updateSettingsApi,
		onSuccess: () => {
			toast.success('Settings successfully updated');

			queryClient.invalidateQueries({
				queryKey: ['settings'],
			});
		},
		onError: (error) => {
			if (error instanceof Error) {
				console.log(error);
				toast.error(error.message);
			}
		},
	});

	return { isUpdating, updateSettings };
};
