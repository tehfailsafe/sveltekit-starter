import type { Actions } from './$types';
import { error, redirect, type Redirect } from '@sveltejs/kit';
import Stripe from 'stripe';
import { PRIVATE_STRIPE_KEY } from '$env/static/private';

const stripe = new Stripe(PRIVATE_STRIPE_KEY);

export const actions: Actions = {
	checkout: async ({ request }) => {
		let url: string | null;
		const data = await request.formData();
		const priceId = data.get('priceId');

		try {
			const session = await stripe.checkout.sessions.create({
				line_items: [
					{
						price: priceId as string,
						quantity: 1
					}
				],
				mode: 'subscription',
				success_url: `${request.headers.get('origin')}/?success=true`,
				cancel_url: `${request.headers.get('origin')}/?canceled=true`
			});

			url = session.url;
		} catch (errorObj) {
			error(500, 'Unknown error occurred');
		}

		if (url) {
			redirect(303, url);
		}
	}
};
