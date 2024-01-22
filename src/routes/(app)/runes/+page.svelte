<script>
	import { countStore } from '$lib/stores/countStore.svelte';
</script>

<h1>Runes</h1>
<div>{countStore.count.value}</div>
<button on:click={countStore.increment}>Increment</button>
