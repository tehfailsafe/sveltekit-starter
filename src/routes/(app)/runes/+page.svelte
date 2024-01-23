<script>
	import { Button } from '$lib/components/ui/button';
	import * as Table from '$lib/components/ui/table';
	import { projectStore } from '$lib/stores/ProjectStore.svelte';
	import Time from 'svelte-time';
</script>

<div class="container mt-12">
	<div class="flex justify-between">
		<h1>ProjectStore</h1>
		<Button variant="secondary" on:click={projectStore.createProject}>Create Project</Button>
	</div>

	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[32px]"></Table.Head>
				<Table.Head class="">Title</Table.Head>
				<Table.Head>Endpoints</Table.Head>
				<Table.Head>Overall Status</Table.Head>
				<Table.Head class="text-right">Last Checked</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each projectStore.projects as project}
				<Table.Row>
					<Table.Cell class="">
						<div class="w-4 h-4 bg-green-500 rounded-full" />
					</Table.Cell>
					<Table.Cell class="font-medium">{project.title}</Table.Cell>
					<Table.Cell>{project.api_routes.length}</Table.Cell>
					<Table.Cell
						>{project.api_routes.filter((route) => route?.status === '200').length} / {project
							.api_routes.length} 200 OK</Table.Cell
					>
					<Table.Cell class="text-right">
						<Time
							class="capitalize"
							timestamp={project.api_routes[0]?.last_checked || 'Never'}
							relative
						></Time>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
