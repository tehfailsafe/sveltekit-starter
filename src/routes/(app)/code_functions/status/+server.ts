import openai from '$lib/openai';
import find_owners from '$lib/utils/find_owners';
import { json } from '@sveltejs/kit';

export const GET = async ({ request }) => {
	const url = new URL(request.url);
	const { thread_id, run_id } = Object.fromEntries(url.searchParams);
	const status = await openai.beta.threads.runs.retrieve(thread_id, run_id);

	if (status.status == 'requires_action') {
		console.log('requires_action');
		const action = status.required_action.submit_tool_outputs.tool_calls[0].function;
		if (action.name === 'find_owners') {
			const { businessType, location } = JSON.parse(action.arguments);
			await find_owners(businessType, location);
		}
	}

	return new Response(JSON.stringify({ success: true }));
};
