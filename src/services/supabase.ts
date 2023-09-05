import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

const supabase = createClient<Database>(
	'https://njseptckdrxwwehzcoqt.supabase.co',
	import.meta.env.VITE_SUPABASE_KEY,
);

export default supabase;
