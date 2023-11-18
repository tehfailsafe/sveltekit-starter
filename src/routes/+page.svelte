<script>
	import { count, increment } from '$lib/stores/store';
	// import { loading, session, signin, signout } from '$lib/stores/authStore';
</script>

<h1>Welcome</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={increment}>Click: {$count}</button>
<!-- 
{$loading}
{$session}

{#if $session}
	<button on:click={signout}>Sign Out</button>
{:else}
	<button on:click={signin}>Sign In</button>
{/if} -->
