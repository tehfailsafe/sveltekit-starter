<script lang="ts">
	import { loadStripe } from '@stripe/stripe-js';
	import { Elements, PaymentElement } from 'svelte-stripe';
	import { onMount } from 'svelte';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';

	let stripe: any;
	let clientSecret: string | undefined;
	let processing = false;
	let elements: any;

	// onMount(async () => {
	// 	clientSecret = await createPaymentIntent();
	// 	stripe = await loadStripe(PUBLIC_STRIPE_KEY);
	// 	console.log('stripe: ', stripe);
	// 	console.log('clientSecret: ', clientSecret);
	// });

	// async function createPaymentIntent() {
	// 	const response = await fetch('/payment/intent', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify({ amount: 1000 })
	// 	});

	// 	const { clientSecret } = await response.json();
	// 	return clientSecret;
	// }

	// async function submit() {
	// 	if (processing) return;
	// 	processing = true;

	// 	console.log('ELEMENTS :', elements);

	// 	const result = await stripe.confirmPayment({
	// 		elements,
	// 		redirect: 'if_required'
	// 	});

	// 	// log results, for debugging
	// 	console.log({ result });

	// 	if (result.error) {
	// 		processing = false;
	// 		console.log('ERROR :', result.error);
	// 	} else {
	// 		// payment succeeded, redirect to "thank you" page
	// 		goto('/payment/thanks');
	// 	}
	// }
</script>

<h1>Payment</h1>
<form method="POST" action="?/checkout">
	<input type="hidden" name="priceId" value="price_1NiMthLLHeORctTg6tghCJOl" />
	<button>Checkout</button>
</form>

<!-- <div class="container mx-auto">
	{#if clientSecret && stripe}
		<Elements
			{clientSecret}
			{stripe}
			theme="night"
			labels="floating"
			variables={{ colorPrimary: '#7c4dff' }}
			bind:elements
		>
			<form on:submit|preventDefault={submit}>
				<PaymentElement />
				<button type="submit">Pay</button>
			</form>
		</Elements>
	{:else}
		Loading...
	{/if}
</div> -->
