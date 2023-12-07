import openai from '$lib/openai';
import { supabase } from '$lib/supabase';
import { PRIVATE_OPENAI_API_KEY } from '$env/static/private';

export const POST = async ({ request }) => {
	const { prompt } = await request.json();

	const completion = await fetch('https://api.openai.com/v1/chat/completions', {
		headers: {
			Authorization: `Bearer ${PRIVATE_OPENAI_API_KEY}`,
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify({
			model: 'gpt-3.5-turbo',
			messages: [
				{ role: 'system', content: 'you are a helpful assistant' },
				{ role: 'user', content: prompt }
			],
			max_tokens: 500,
			temperature: 0.6,
			stream: true
		})
	});

	return new Response(completion.body, {
		headers: {
			'content-type': 'text/event-stream'
		}
	});
};
