import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../../services/cabins';

export const useCabins = () => {
	return useQuery({
		queryKey: ['cabins'],
		queryFn: getCabins,
	});
};
