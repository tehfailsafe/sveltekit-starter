import { getCount, updateCount, type Count } from '$lib/models/Count';

const CountStore = async () => {
	let count = $state<Count>({});
	count = await getCount('1');

	return {
		get count() {
			return count;
		},
		set count(newCount: Count) {
			count = newCount;
			updateCount(newCount);
		},
		increment() {
			count.value! += 1;
			updateCount(count);
		}
	};
};

export const countStore = await CountStore();
