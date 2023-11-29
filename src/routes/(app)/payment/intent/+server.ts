import Stripe from 'stripe';
import { PRIVATE_STRIPE_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

// initialize Stripe
const stripe = new Stripe(PRIVATE_STRIPE_KEY);

// handle POST /create-payment-intent
export async function POST() {
	// create the payment intent
	console.log('POST /create-payment-intent');

	const paymentIntent = await stripe.paymentIntents.create({
		amount: 2000,
		// note, for some EU-only payment methods it must be EUR
		currency: 'usd',
		automatic_payment_methods: {
			enabled: true
		}
	});

	// return the clientSecret to the client
	return json({
		clientSecret: paymentIntent.client_secret
	});
}
