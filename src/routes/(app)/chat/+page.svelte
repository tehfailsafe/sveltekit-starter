<script lang="ts">
	export let data;
	import { SSE } from 'sse.js';
	import { supabase } from '$lib/supabase';
	import Message from '$lib/components/message.svelte';
	import { writable } from 'svelte/store';

	let loading = false;
	let currentAnswer = '';
	export let messages = writable([]);

	const onSubmit = async ({ target }: { target: HTMLFormElement }) => {
		const formData = new FormData(target);
		const prompt = await formData.get('prompt');
		const id = Date.now();
		loading = true;
		$messages = [...$messages!, { question: prompt, answer: '', id: id }];

		const eventSource = new SSE('/chat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			payload: JSON.stringify({ prompt })
		});

		eventSource.addEventListener('message', async (e: any) => {
			if (e.data === '[DONE]') {
				// loading = false;

				await supabase
					.from('assistant_messages')
					.insert([{ question: prompt, answer: currentAnswer }]);

				currentAnswer = '';
				return;
			}

			const completionResponse = JSON.parse(e.data);
			const [{ delta }] = completionResponse.choices;

			if (delta.content) {
				currentAnswer = (currentAnswer ?? '') + delta.content;
				$messages = $messages.map((message) =>
					message.id === id ? { ...message, answer: currentAnswer } : message
				);
			}
		});
		eventSource.stream();
		// scrollToBottom();
	};
</script>

<div class="container">
	<form on:submit|preventDefault={onSubmit}>
		<input type="text" name="prompt" />
		<button type="submit">Ask</button>
	</form>

	{#each $messages as message}
		<Message {message} />
	{/each}
</div>
