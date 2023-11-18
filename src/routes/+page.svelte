<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { count, increment } from '$lib/stores/store';
	// import { loading, session, signin, signout } from '$lib/stores/authStore';
</script>

<div class="container mx-auto">
	<h1 class="text-3xl font-bold tracking-tight">Welcome</h1>
	<button on:click={increment} class="px-4 py-2 rounded-md bg-slate-300">Click: {$count}</button>
	<Button on:click={increment}>Clicked: {$count}</Button>
</div>
<!-- 
{$loading}
{$session}

{#if $session}
	<button on:click={signout}>Sign Out</button>
{:else}
	<button on:click={signin}>Sign In</button>
{/if} -->
