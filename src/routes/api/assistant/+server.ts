import { supabase } from '$lib/supabase';

export const POST = async ({ request }) => {
	// return new Response(JSON.stringify({ message: 'Hello' }));
	// const data = await request.formData();
	const body = await request.json();
	console.log(body);

	// const prompt = data.get('prompt') as string;

	// console.log('prompt', prompt);

	// const stamp = Date.now();
	// const completion = await openai.chat.completions.create({
	// 	model: 'gpt-3.5-turbo',
	// 	messages: [
	// 		{ role: 'system', content: 'you are a helpful assistant' },
	// 		{ role: 'user', content: prompt }
	// 	],
	// 	max_tokens: 2000,
	// 	temperature: 0.6,
	// 	stream: true
	// });
	// console.log('STEAMP', stamp);
	// for await (const chunk of completion) {
	// 	console.log(chunk.choices[0]);
	// 	await supabase.from('assistant_messages').upsert({
	// 		id: stamp,
	// 		prompt,
	// 		message: chunk.choices[0].delta.content
	// 	});
	// }
	// const output = response.choices[0].message.content;
	// await supabase.from('assistant_messages').insert({ prompt, message: output });
	// console.log(output);
	return new Response(JSON.stringify({ message: 'Hello' }), { status: 200 });
};
