import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const POST = async ({ locals }) => {
	const { supabase } = locals;

	const { error: err } = await supabase.auth.signOut();
	if (err) {
		throw error(500, 'Something went wrong');
	}

	throw redirect(303, '/auth/signin');
};
