import { supabase } from '$lib/supabase';

const CountStore = async () => {
	let count = $state({
		id: '0',
		value: 0
	});

	const { data } = await supabase.from('count').select().single();
	if (data) {
		count = data;
	}

	return {
		get count() {
			return count;
		},
		increment: async () => {
			count.value += 1;
			const { data, error } = await supabase
				.from('count')
				.update({ value: count.value })
				.eq('id', count.id);
		}
	};
};

export const countStore = await CountStore();
