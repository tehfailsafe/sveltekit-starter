<script lang="ts">
	import { onMount } from 'svelte';

	export let form;

	onMount(async () => {
		if (form?.data) {
			const { thread_id, run_id } = form.data;
			const interval = setInterval(async () => {
				const status = await fetch(`/assistant/status?thread_id=${thread_id}&run_id=${run_id}`);
			}, 1000);

			return () => clearInterval(interval);
		}
	});
</script>

<div class="container">
	<form action="?/create" method="POST">
		<input
			type="text"
			name="prompt"
			value="Hello, I'm looking for owners of skin care companies in Dallas TX"
		/>
		<button type="submit">Test</button>
	</form>
</div>

{form?.data}
