import openai from '$lib/openai';

const get_owners = (industry: string, location: string) => {
	console.log(`finding owners from ${industry} in ${location}`);
};

export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const prompt = formData.get('prompt');
		if (!prompt) return { success: false, data: { message: 'No prompt provided' } };

		console.log(prompt);

		const response = await openai.chat.completions.create({
			model: 'gpt-3.5-turbo-1106',
			messages: [
				{ role: 'system', content: 'you are a helpful assistant' },
				{ role: 'user', content: prompt }
			],
			tools: [
				{
					type: 'function',
					function: {
						name: 'get_owners',
						description: 'Returns a list of owners for the given industry and location',
						parameters: {
							type: 'object',
							properties: {
								industry: {
									type: 'string',
									description: 'The industry to search for'
								},
								location: {
									type: 'string',
									description: 'The location to search for'
								}
							},
							required: ['industry', 'location']
						}
					}
				}
			]
		});

		const [choice] = response.choices;
		if (choice.finish_reason === 'tool_calls') {
			choice.message.tool_calls?.forEach((tool_call) => {
				if (tool_call.function.name === 'get_owners') {
					const args = JSON.parse(tool_call.function.arguments);
					const { industry, location } = args;
					const owners = get_owners(industry, location);
					console.log(owners);
				}
			});
		}

		return { success: true, data: { response } };
	}
};
