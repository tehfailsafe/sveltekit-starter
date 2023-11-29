<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { count, increment } from '$lib/stores/store';
</script>

<div class="container mx-auto">
	<h1 class="text-3xl font-bold leading-tight tracking-tight">Welcome to SupaSvelte</h1>
	<Button variant="secondary" on:click={increment}>Clicked: {$count}</Button>
	<Button variant="ghost" on:click={increment}>Clicked: {$count}</Button>
	<Button variant="outline" on:click={increment}>Clicked: {$count}</Button>
	<Button on:click={increment}>Clicked: {$count}</Button>
</div>
<div class="container max-w-xl mx-auto">
	<Button href="/payment">Buy Now</Button>
</div>
