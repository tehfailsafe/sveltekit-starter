<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Header from './header.svelte';

	export let data;

	let { session } = data;
</script>

<svelte:head>
	<title>Sveltekit Starter</title>
</svelte:head>

<Header {session} />
<ModeWatcher />
<slot />
