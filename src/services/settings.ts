import { Settings } from '../types/settings.types';
import supabase from './supabase';

export const getSettings = async () => {
	const { data, error } = await supabase
		.from('settings')
		.select('*')
		.single();

	if (error) {
		throw new Error('Settings could not be loaded');
	}

	return data;
};

export const updateSettings = async (newSettings: Settings) => {
	const { data, error } = await supabase
		.from('settings')
		.update(newSettings)
		.eq('id', 1)
		.select();

	if (error) {
		throw new Error('Settings could not be updated');
	}

	return data;
};
