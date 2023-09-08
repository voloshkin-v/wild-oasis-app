import { Row } from './supabase.helper';

export type Settings = Omit<Row<'settings'>, 'created_at' | 'id'>;
