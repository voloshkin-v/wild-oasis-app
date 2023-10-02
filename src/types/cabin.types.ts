import { Row } from './supabase.helper';

export type Cabin = Row<'cabins'>;

export type NewCabin = Omit<Cabin, 'id' | 'created_at' | 'image'> & {
	image: FileList;
};
