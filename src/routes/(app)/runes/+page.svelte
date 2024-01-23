<script>
	import { Button } from '$lib/components/ui/button';
	import * as Table from '$lib/components/ui/table';
	import * as Dialog from '$lib/components/ui/dialog';
	import { projectStore } from '$lib/stores/ProjectStore.svelte';
	import Time from 'svelte-time';
	import Input from '$lib/components/ui/input/input.svelte';

	let input = '';
	let dialogOpen = false;
</script>

<h2>{dialogOpen}</h2>
<div class="container mt-12">
	<div class="flex justify-between">
		<h1>ProjectStore</h1>

		<Dialog.Root
			open={dialogOpen}
			onOpenChange={(nextValue) => {
				dialogOpen = nextValue;
			}}
		>
			<Dialog.Trigger asChild>
				<Button variant="secondary" on:click={() => (dialogOpen = true)}>Create Project</Button>
			</Dialog.Trigger>

			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>New Project</Dialog.Title>
					<Dialog.Description></Dialog.Description>
				</Dialog.Header>
				<div class="">
					<Input placeholder="Project Name" bind:value={input} />
				</div>
				<div class="flex justify-end">
					<Button variant="secondary" on:click={() => (dialogOpen = false)}>Cancel</Button>
					<Button
						class="ml-2"
						on:click={async () => {
							await projectStore.createProject(input);
							dialogOpen = false;
						}}>Create</Button
					>
				</div>
			</Dialog.Content>
		</Dialog.Root>
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
