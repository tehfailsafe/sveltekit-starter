<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import type { Session } from '@supabase/supabase-js';
	import { Sun, Moon } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
	export let session: Session | null;
</script>

<div class="flex justify-between px-4 py-4">
	<a href="/">Logo</a>

	<div class="flex gap-4">
		<Button on:click={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>

		{#if session}
			<form action="/signout" method="POST">
				<Button variant="outline" type="submit">Sign Out</Button>
			</form>
		{:else}
			<Button variant="outline" href="/signin">Sign In</Button>
		{/if}
	</div>
</div>
