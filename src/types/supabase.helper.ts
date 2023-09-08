import { Database } from './supabase';

export type Row<T extends keyof Database['public']['Tables']> =
	Database['public']['Tables'][T]['Row'];
