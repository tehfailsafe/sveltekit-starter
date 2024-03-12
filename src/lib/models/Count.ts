import { supabase } from '$lib/supabase';

export type Count = {
	id?: number;
	value?: number;
	test?: string;
	created_at?: string;
};

export const getCount = async (id: string): Promise<Count> => {
	const { data, error } = await supabase.from('count').select().eq('id', id).single();
	if (error) {
		throw new Error(error.message);
	}
	return data as Count;
};

export const updateCount = async (count: Count): Promise<Count> => {
	const { data, error } = await supabase.from('count').upsert(count).select().single();
	if (error) {
		throw new Error(error.message);
	}
	return data as Count;
};
