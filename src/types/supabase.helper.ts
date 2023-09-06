import { Database } from './supabase';

type Row<T extends keyof Database['public']['Tables']> =
	Database['public']['Tables'][T]['Row'];

export type Cabin = Row<'cabins'>;
export type NewCabin = Omit<Cabin, 'id' | 'created_at'>;
