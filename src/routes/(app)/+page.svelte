<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { countStore } from '$lib/stores/countStore.svelte';
</script>

<div class="container">
	<h1>Welcome to SvelteKit Starter</h1>
	<p>A boilerplate for SvelteKit 2.0 using Svelte 5 preview</p>

	<div class="flex flex-col gap-4 py-12">
		<div class="text-lg">Store value, pulled from Supabase DB: {countStore.count.value}</div>
		<Button variant="secondary" on:click={countStore.increment}>Increment</Button>
	</div>
	<h1>Other links:</h1>
	<ul class="list-disc list-inside">
		<li><a href="/payment">Payment</a></li>
		<li><a href="/runes">Runes</a></li>
	</ul>
</div>
