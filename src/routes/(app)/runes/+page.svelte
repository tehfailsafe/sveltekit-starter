<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { projectStore } from '$lib/stores/ProjectStore.svelte';
</script>

<div class="container mt-12">
	<div class="flex justify-between">
		<h1>ProjectStore</h1>
		<Button variant="secondary" on:click={projectStore.createProject}>Create Project</Button>
	</div>
	{#each projectStore.projects as project}
		<div>{project.title}: {project.api_routes.length}</div>
	{/each}
</div>
