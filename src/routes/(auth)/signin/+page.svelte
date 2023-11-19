<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { page } from '$app/stores';

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	console.log($page.url.origin);

	export const signin = async () => {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `${$page.url.origin}/callback`
			}
		});

		if (error) console.log(error);
	};
</script>

<svelte:head>
	<title>Sveltekit Starter - Login</title>
</svelte:head>

<div class="container max-w-md p-8 mx-auto text-center border rounded-md bg-primary-foreground">
	<h1 class="mb-6 text-3xl font-bold tracking-tight">Sign In</h1>
	<Button on:click={signin} class="w-full">Sign In with Google</Button>
</div>
