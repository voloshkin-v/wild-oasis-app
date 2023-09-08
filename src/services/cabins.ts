import supabase from './supabase';
import { NewCabin } from '../types/cabin.types';

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
	const imageFile = newCabin.image[0];

	const imageName = imageFile.name;
	const imagePath = `${
		import.meta.env.VITE_SUPABASE_URL
	}/storage/v1/object/public/cabin-images/${imageName}`;

	const { error: storageError } = await supabase.storage
		.from('cabin-images')
		.upload(imageName, imageFile);

	if (storageError) {
		throw new Error(
			`Cabin image could not be uploaded. ${storageError.message}`,
		);
	}

	const { data, error } = await supabase
		.from('cabins')
		.insert([{ ...newCabin, image: imagePath }])
		.select();

	if (error) {
		throw new Error('Cabins could not be created.');
	}

	return data;
};
