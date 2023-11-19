<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { count, increment } from '$lib/stores/store';
</script>

<div class="container mx-auto">
	<h1 class="text-3xl font-bold leading-tight tracking-tight">Welcome to SupaSvelte</h1>
	<Button on:click={increment}>Clicked: {$count}</Button>
</div>
