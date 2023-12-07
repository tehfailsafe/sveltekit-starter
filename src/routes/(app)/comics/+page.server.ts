import openai from '$lib/openai';
import { gptFunction } from './gptFunction';

const get_owners = (industry: string, location: string) => {
	console.log(`finding owners from ${industry} in ${location}`);
};

export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const prompt = formData.get('prompt');
		if (!prompt) return { success: false, data: { message: 'No prompt provided' } };

		const choice = await gptFunction(prompt);

		// if (choice.finish_reason === 'tool_calls') {
		// 	choice.message.tool_calls?.forEach((tool_call) => {
		// 		if (tool_call.function.name === 'get_owners') {
		// 			const args = JSON.parse(tool_call.function.arguments);
		// 			const { industry, location } = args;
		// 			const owners = get_owners(industry, location);
		// 			console.log(owners);
		// 		}
		// 	});
		// }

		return { success: true, data: { choice } };
	}
};
