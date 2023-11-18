<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			console.log('AUTH STATE CHANGE', _session);
			invalidate('supabase:auth');
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<div>
	<a href="/">Logo</a>

	{#if session}
		<form action="/auth/signout" method="POST">
			<button type="submit">Sign Out</button>
		</form>
	{:else}
		<a href="/auth/signin">Sign in</a>
	{/if}
</div>
<slot />
