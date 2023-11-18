<script>
	import { redirect } from '@sveltejs/kit';

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	export const signin = async () => {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: '/auth/callback'
			}
		});

		if (error) console.log(error);
	};
</script>

<h2>signin!</h2>
{#if session}
	<h1>Welcome {session.user.email}</h1>
	<!-- <button on:click={() => redirect(301, '/auth/signout')}>Sign Out</button> -->
	<a href="/auth/signout">Sign Out</a>
{:else}
	<button on:click={signin}>Sign In</button>
{/if}
