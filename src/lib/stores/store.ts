import { writable } from 'svelte/store';
import { supabase } from '$lib/supabase';

const { data: countData, error } = await supabase.from('count').select('*').single();
export let count = writable(countData.value);

supabase
	.channel('count')
	.on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'count' }, (payload) => {
		if (payload.eventType === 'UPDATE') {
			count.set(payload.new.value);
		}
	})
	.subscribe();

export const increment = async () => {
	count.update((value) => {
		supabase
			.from('count')
			.update({ value: value + 1 })
			.eq('id', 1)
			.then(() => {});
		return value + 1;
	});
};
