import supabase from './supabase';
import { NewCabin } from '../types/supabase.helper';

export const getCabins = async () => {
	const { data, error } = await supabase.from('cabins').select('*');

	if (error) {
		throw new Error('Cabins could not be loaded.');
	}

	return data;
};

export const deleteCabin = async (id: number) => {
	const { error, data } = await supabase.from('cabins').delete().eq('id', id);

	if (error) {
		throw new Error('Cabins could not be deleted.');
	}

	return data;
};

export const createCabin = async (newCabin: NewCabin) => {
	const { data, error } = await supabase
		.from('cabins')
		.insert([newCabin])
		.select();

	if (error) {
		console.log('Error', error);
		throw new Error('Cabins could not be created.');
	}

	return data;
};
