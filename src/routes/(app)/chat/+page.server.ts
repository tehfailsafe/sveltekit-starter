import { supabase } from '$lib/supabase.js';

export const load = async (request) => {
	const { data, error } = await supabase.from('assistant_messages').select('*');

	return {
		messages: data
	};
};
