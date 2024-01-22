<script>
	import { countStore } from '$lib/stores/countStore.svelte';
	import { projectStore } from '$lib/stores/ProjectStore.svelte';
</script>

<h1>Runes</h1>
<div>{countStore.count.value}</div>
<button on:click={countStore.increment}>Increment</button>

<h1>ProjectStore</h1>
{#each projectStore.projects as project}
	<div>{project.title}: {project.api_routes.length}</div>
{/each}
