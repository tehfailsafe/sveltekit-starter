import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const POST = async ({ locals }) => {
	const { supabase } = locals;

	const { error: err } = await supabase.auth.signOut();
	if (err) {
		error(500, 'Something went wrong');
	}

	redirect(303, '/');
};
