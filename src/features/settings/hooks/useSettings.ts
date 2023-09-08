import { useQuery } from '@tanstack/react-query';
import { getSettings } from '../../../services/settings';

export const useSettings = () => {
	return useQuery({
		queryKey: ['settings'],
		queryFn: getSettings,
	});
};
