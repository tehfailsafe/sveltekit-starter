import openai from '$lib/openai';

export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const prompt = formData.get('prompt') || '';

		const thread = await openai.beta.threads.create();
		const message = await openai.beta.threads.messages.create(thread.id, {
			role: 'user',
			content: prompt
		});

		const run = await openai.beta.threads.runs.create(thread.id, {
			assistant_id: 'asst_snlIF6IpwaDYEx9Bf0wk5wm5',
			instructions: 'Please address the user as Jane Doe. The user has a premium account.'
		});

		return { success: true, data: { run_id: run.id, thread_id: thread.id } };
	}
};
