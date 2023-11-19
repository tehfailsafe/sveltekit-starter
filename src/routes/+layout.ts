import type { LayoutLoad } from './$types';
import { supabase } from '$lib/supabase';

export const load: LayoutLoad = async () => {
	const {
		data: { session }
	} = await supabase.auth.getSession();

	return { supabase, session };
};
